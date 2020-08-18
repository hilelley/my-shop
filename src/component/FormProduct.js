import React, { useContext, useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";

const FormProduct = ({ functionParent, defaultValue }) => {
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

  const onFinish = (valuesForm) => functionParent(valuesForm);

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
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
          name={["image"]}
          label="Image"
          initialValue={defaultValue ? defaultValue.image : ""}
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
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormProduct;
