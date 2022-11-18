import React from "react";
import { DatePicker, TimePicker, Form, Input, Button, InputNumber } from "antd";
import SelectData from "../select_data/selectData";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addWorkFlowAction } from "../../../libs/redux/workflow/action";
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
const timeRule = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};
const dateRule = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select date!",
    },
  ],
};

const Formdata = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // {
    //   key: "task 1",
    //   id: "1",
    //   name: "Felicia Salazar",
    //   email: "dictum.sapien.aenean@protonmail.ca",
    //   tags: ["INTERN"],
    //   creator: "Thanh (Menter)",
    //   createdAt: "2014-12-24 23:12:00",
    // },
    const handleData = {
      name: values?.name,
      email: values?.email,
      creator: values?.creator,
      createdAt: new Date(),
      startDate: new Date(values["range-picker"][0]),
      endDate: new Date(values["range-picker"][1]),
      id: shortid.generate(),
      workflow: values?.workflow,
      time: new Date(values["time-picker"]),
      nameTask: values?.nametask,
      userId: values?.userId,
      taskSalary: values?.taskSalary,
    };
    dispatch(addWorkFlowAction(handleData));
    setOpen(false);
  };

  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <SelectData form={form} />
        <Form.Item
          name={["workflow"]}
          label="Workflow"
          rules={[
            {
              type: "workflow",
            },
            {
              required: true,
              message: "Please input your Workflow!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["creator"]} label="Creator">
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="Set Date" {...dateRule}>
          <RangePicker />
        </Form.Item>
        <Form.Item name="time-picker" label="Set Time" {...timeRule}>
          <TimePicker />
        </Form.Item>
        <Form.Item
          name={["nametask"]}
          label="Name Task"
          rules={[
            {
              type: "nametask",
            },
            {
              required: true,
              message: "Please input your Name Task!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["taskSalary"]}
          label="Salary Task"
          rules={[
            {
              type: "taskSalary",
              min: 100000,
              max: 100000000,
            },
            {
              required: true,
              message: "Please input your Salary Task!",
            },
          ]}
        >
          <InputNumber />
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
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Formdata;
