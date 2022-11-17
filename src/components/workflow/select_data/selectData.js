import React from "react";
import { Select, Form, Input } from "antd";
import { useSelector } from "react-redux";
const { Option, OptGroup } = Select;

const SelectData = ({ form }) => {
  const { employees } = useSelector((state) => state.employee);
  const jobPositions = [...new Set(employees.map((item) => item.jobPosition))];
  const onNameChange = (value) => {
    if (value === "") {
      return;
    } else {
      const employee = employees.find((x) => x.id === value);
      form.setFieldsValue({
        email: employee.email,
        name: employee.name,
      });
    }
  };
  return (
    <>
      <Form.Item
        name="userId"
        label="Name"
        rules={[
          {
            type: "name",
          },
          {
            required: true,
            message: "Please choose employee!",
          },
        ]}
      >
        <Select placeholder="Select Name" onSelect={onNameChange}>
          {jobPositions.map((position, i) => (
            <OptGroup label={position} key={i}>
              {employees
                .filter((x) => x.jobPosition === position)
                .map((employee) => (
                  <Option value={employee.id} key={employee.id}>
                    {employee.name}
                  </Option>
                ))}
            </OptGroup>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        hidden
        name="name"
        label="name"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
          },
        ]}
      >
        <Input readOnly />
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
            message: "Please input Email!",
          },
        ]}
      >
        <Input readOnly />
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
