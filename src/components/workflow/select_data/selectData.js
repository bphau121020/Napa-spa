import React from "react";
import { Select, Form, Input } from "antd";
const { Option, OptGroup } = Select;

const SelectData = ({ form }) => {
  // const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case "Watson":
        form.setFieldsValue({
          email: "magna.sed@yahoo.org",
        });
        return;
      case "Copeland":
        form.setFieldsValue({
          email: "metus.aliquam.erat@icloud.com",
        });
        return;
      case "Brennan":
        form.setFieldsValue({
          email: "massa.lobortis.ultrices@protonmail.org",
        });
        return;
      case "Donaldson":
        form.setFieldsValue({
          email: "sed.molestie@hotmail.ca",
        });
        return;
      case "Gardner":
        form.setFieldsValue({
          email: "odio.phasellus.at@icloud.ca",
        });
        return;
      case "Salazar":
        form.setFieldsValue({
          email: "dictum.sapien.aenean@protonmail.ca",
        });
        return;
      case "Ballard":
        form.setFieldsValue({
          email: "erat.vel@hotmail.com",
        });
        return;
      case "Irwin":
        form.setFieldsValue({
          email: "duis.dignissim@aol.ca",
        });
        return;
      case "Parks":
        form.setFieldsValue({
          email: "tempus@aol.couk",
        });
        return;
      case "Burnett":
        form.setFieldsValue({
          email: "est@protonmail.org",
        });
        return;
      case "Justice":
        form.setFieldsValue({
          email: "accumsan@aol.org",
        });
        return;
      case "None":
        form.setFieldsValue({
          email: "",
        });
        return;
      default:
        return;
    }
  };
  return (
    <>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            type: "name",
          },
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Select placeholder="Select Name" onChange={onGenderChange} allowClear>
          <OptGroup label="CEO">
            <Option value="Donaldson">Noah Donaldson</Option>
          </OptGroup>
          <OptGroup label="CTO">
            <Option value="Copeland">Aiko Copeland</Option>
            <Option value="Brennan">Myra Brennan</Option>
            <Option value="Irwin">Ocean Irwin</Option>
          </OptGroup>
          <OptGroup label="IT">
            <Option value="Gardner">Amy Gardner</Option>
            <Option value="Parks">Boris Parks</Option>
            <Option value="Burnett">Hiroko Burnett</Option>
          </OptGroup>
          <OptGroup label="Intern">
            <Option value="Watson">Rowan Watson</Option>
            <Option value="Salazar">Felicia Salazar</Option>
            <Option value="Ballard">Kenneth Ballard</Option>
            <Option value="Justice">Xena Justice</Option>
          </OptGroup>
          <OptGroup label="None">
            <Option value="None">None</Option>
          </OptGroup>
        </Select>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
          },
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      ></Form.Item>
    </>
  );
};

export default SelectData;
