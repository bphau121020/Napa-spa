import React from "react";
import { DatePicker, TimePicker, Form, Input } from "antd";
import SelectData from "../select_data/selectData";
const { RangePicker } = DatePicker;
const layout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const Formdata = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <SelectData />
        <Form.Item
          name={["user", "workflow"]}
          label="Workflow"
          rules={[
            {
              type: "workflow",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "creator"]} label="Creator">
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="Set Date" {...rangeConfig}>
          <RangePicker />
        </Form.Item>
        <Form.Item name="time-picker" label="Set Time" {...config}>
          <TimePicker />
        </Form.Item>
        <Form.Item
          name={["user", "nametask"]}
          label="Name Task"
          rules={[
            {
              type: "nametask",
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
            ...layout.wrapperCol,
            offset: 8,
          }}
        ></Form.Item>
      </Form>
    </div>
  );
};

export default Formdata;
