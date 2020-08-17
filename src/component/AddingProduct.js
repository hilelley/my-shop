import React, { useContext, useState } from "react";
import axios from "axios";
import DataContext from "./DataContext";
import { Form, Input, InputNumber, Button } from "antd";

const AddingProduct = () => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  const arrayProdeucts = dataContext.data.arrayProdeucts;
  let [searchMode, setSearchMode] = useState(false);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} ",
    },
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = async (values) => {
    await axios.put("http://localhost:8000/products/add", values);
    axios.get("http://localhost:8000/products").then((res) => {
      changeData({
        ...data,
        arrayProdeucts: res.data,
      });
    });
  };

  return (
    <div className="products">
      <div>Adding Product</div>

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["title"]}
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["image"]}
          label="Image"
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
        {/* <Form.Item name={[description"]} label="Description">
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddingProduct;
