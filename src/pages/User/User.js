import { Button, message, Popconfirm, Space, Table, Typography } from "antd";
import Search from "antd/es/input/Search";
import ModalCreateEmployee from "../../components/users/ModalCreate";
import ModalUpdateEmployee from "../../components/users/ModalUpdate";
import userData from "../../assets/JsonData/userData.json";
import { useState } from "react";
import styles from "./user.module.css";
import { useSelector } from "react-redux";

const onSearch = (value) => console.log(value);
const onSubmit = (value) => console.log(value);
const { Title } = Typography;
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const User = () => {
  const [data, setData] = useState(userData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasSelected = selectedRowKeys.length > 0;
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const { data: formData } = useSelector((state) => state.form);

  const onUpdate = (key) => {
    const newArr = data.map((obj) => {
      if (obj.key === key) {
        return { ...formData, key: key };
      }
      return obj;
    });
    setData(newArr);
    message.success("Update user success!");
  };

  const onAdd = () => {
    const key = data.at(-2).key;
    setData([...data, { ...formData, key: key + 1 }]);
    message.success("Add user success!");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "NickName",
      dataIndex: "nickname",
      key: "nickname",
      width: 100,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 80,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: 80,
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filterSearch: true,
      onFilter: (value, record) => record.gender.startsWith(value),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 120,

      render: (text) => <p style={{ color: "#FFA500" }}>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ModalUpdateEmployee data={record} onUpdate={onUpdate} />
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              onDelete(record.key);
            }}
          >
            <Button type="primary" size="small" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title style={{ textAlign: "center", fontSize: "20px" }}>
        Employee Management
      </Title>
      <div className={styles.navBar}>
        <div className={styles.block}>
          <div>
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
            >
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
          <Search
            placeholder="Search..."
            allowClear
            enterButton="Search"
            size="medium"
            style={{
              width: 300,
            }}
            onSearch={onSearch}
          />
        </div>
        <div className={styles.block}>
          <ModalCreateEmployee onAdd={onAdd} primary />
        </div>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        onChange={onChange}
        scroll={{
          x: 1000,
          y: "calc(100vh - 350px)",
        }}
      />
    </div>
  );
};
export default User;
