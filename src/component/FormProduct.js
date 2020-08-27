import React, { useState } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Button, Radio, Upload } from "antd";
import { PictureOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const FormProduct = ({ functionParent, defaultValue }) => {
  const [imageFromUrl, setImageFromUrl] = useState(true);
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} ",
    },
  };

  const normFile = (e) => {
    // console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFinish = async (valuesForm) => {
    if (imageFromUrl) {
      delete valuesForm["radio-group"];
      functionParent(valuesForm);
    } else {
      const file = valuesForm.dragger[0].originFileObj;
      console.log(file);
      await axios.post("http://localhost:8000/upload", file, {
        params: { filename: file.name },
        onUploadProgress: function (progressEvent) {
          const precentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(precentCompleted);
        },
      });
      const host = window.document.location.hostname;
      delete valuesForm.dragger;
      valuesForm.image = `http://${host}:8000/images/${file.name}`;
      delete valuesForm["radio-group"];
      console.log(valuesForm);
      functionParent(valuesForm);
    }
  };
  const uploadOrUrl = (obj) => {
    const choice = obj.target.value;
    if (choice === "upload") {
      setImageFromUrl(false);
    } else if (choice === "url") {
      setImageFromUrl(true);
    }
  };
  const imageFrom = () => {
    if (imageFromUrl) {
      return <Input />;
    } else {
      return (
        <Form.Item label="">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files">
              <p className="ant-upload-drag-icon">
                <PictureOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag image to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      );
    }
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{
        "input-number": 0,
      }}
    >
      <Form.Item
        name="radio-group"
        label=""
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Radio.Group defaultValue="url">
          <Radio value="url" onChange={uploadOrUrl}>
            תמונה מקישור
          </Radio>
          <Radio value="upload" onChange={uploadOrUrl}>
            העלאת תמונה מהמחשב
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={["image"]}
        label="Image"
        initialValue={defaultValue ? defaultValue.image : ""}
        rules={[
          {
            required: true,
          },
        ]}
      >
        {imageFrom()}
      </Form.Item>

      <Form.Item
        name={["title"]}
        label="Title"
        initialValue={defaultValue ? defaultValue.title : ""}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["quantity"]}
        label="Quantity"
        initialValue={defaultValue ? defaultValue.quantity : ""}
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["price"]}
        label="Price"
        initialValue={defaultValue ? defaultValue.price : ""}
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      {/* <Form.Item name={["description"]} label="Description" initialValue={defaultValue?defaultValue.description:""}>
          <Input.TextArea />
        </Form.Item> */}

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormProduct;
