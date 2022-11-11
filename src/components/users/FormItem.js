import {Form, Input, InputNumber, Select} from "antd";
import React from "react";
import PropTypes from "prop-types";

FormItem.propTypes = {
    onSubmit: PropTypes.func,
};
FormItem.defaultProps = {
    onSubmit: null,
};
const {Option} = Select;

function FormItem(props) {
    const initialValues = {
        name: '',
        nickname: '',
        age: 18,
        gender: null,
        phone: '',
        email: '',
        address: '',
    }
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 12,
        },
    };
    return (
        <>
            <Form initialValues={initialValues} onSubmit={props.onSubmit}
                  {...formItemLayout}
            >
                <Form.Item

                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your Name"/>
                </Form.Item>
                <Form.Item

                    name="nickname"
                    label="Nickname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Nickname!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your Nickname"/>
                </Form.Item>
                <Form.Item

                    name="age"
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 1, max: 99,
                            required: true,
                            message: 'Invalid Input Age',
                        }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item

                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="Select your gender">
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
                            pattern: '(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\\b',
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your Phone Number"/>
                </Form.Item>
                <Form.Item

                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your Email"/>
                </Form.Item>
                <Form.Item

                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <Input placeholder="Please input your Address"/>
                </Form.Item>
            </Form>
        </>
    )
}

export default FormItem;
