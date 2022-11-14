import { Form, Input, Select } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { formActions } from "../../store/form/slice";
import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";

FormItem.propTypes = {
  onChange: PropTypes.func,
};
FormItem.defaultProps = {
  onChange: null,
};
const { Option } = Select;

function FormItem(props) {
  const dispatch = useDispatch();
  const data = props.data;

  const initialValues = {
    name: data.name,
    nickname: data.nickname,
    age: data.age,
    gender: data.gender,
    phone: data.phone,
    email: data.email,
    address: data.address,
  };

  const [formData, setFormData] = useState(initialValues);

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const debouncedValue = useDebounce(formData, 300);

  useEffect(() => {
    console.log(formData);
    dispatch(
      formActions.formChange({
        data: formData,
      })
    );
  }, [debouncedValue]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form initialValues={initialValues} {...formItemLayout}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            onChange={onChange}
            name="name"
            placeholder="Please input your Name"
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Nickname"
          rules={[
            {
              required: true,
              message: "Please input your Nickname!",
            },
          ]}
        >
          <Input
            onChange={onChange}
            name="nickname"
            placeholder="Please input your Nickname"
          />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              type: "number",
              min: 1,
              max: 99,
              required: true,
              message: "Invalid Input Age",
            },
          ]}
        >
          <Input name="age" type="number" onChange={onChange} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select
            placeholder="Select your gender"
            name="gender"
            onChange={onChange}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              pattern: "(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\\b",
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            name="phone"
            onChange={onChange}
            placeholder="Please input your Phone Number"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            name="email"
            onChange={onChange}
            placeholder="Please input your Email"
          />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input
            name="address"
            onChange={onChange}
            placeholder="Please input your Address"
          />
        </Form.Item>
      </Form>
    </>
  );
}

export default FormItem;
