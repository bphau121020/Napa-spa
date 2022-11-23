import {Button, message, Input, Modal, Select, Typography, Form} from "antd";
import React, {useState} from "react";
import styles from "./user.module.css";
import {Table} from "ant-table-extensions"
import {DeleteOutlined, EditOutlined, UserAddOutlined} from "@ant-design/icons";


const {Option} = Select;
const {Title} = Typography;
const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};

function User() {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [editingEmployees, setEditingEmployees] = useState(null);
    const [createEmployees, setCreateEmployees] = useState(null);
    const [employees, setEmployees] = useState([
        {
            id: 1,
            key: 1,
            name: "Rowan Watson",
            gender: "M",
            dateOfBirth: "2022-05-14 01:21:17",
            email: "magna.sed@yahoo.org",
            phone: "715-5838",
            address: "8712 Adipiscing, Ave",
            creditCard: "4532 784 23 7341",
            contractType: "Parttime",
            jobPosition: "Intern",
        },
        {
            id: 2,
            key: 2,
            name: "Aiko Copeland",
            gender: "F",
            dateOfBirth: "2023-11-02 17:18:45",
            email: "metus.aliquam.erat@icloud.com",
            phone: "663-1156",
            address: "354-2922 Arcu Avenue",
            creditCard: "4822126783245391",
            contractType: "Fulltime",
            jobPosition: "CTO",
        },
        {
            id: 3,
            key: 3,
            name: "Myra Brennan",
            gender: "M",
            dateOfBirth: "2022-09-01 12:43:32",
            email: "massa.lobortis.ultrices@protonmail.org",
            phone: "413-4239",
            address: "Ap #715-7091 Metus. Road",
            creditCard: "4539521469661255",
            contractType: "Fulltime",
            jobPosition: "CTO",
        },
        {
            id: 4,
            key: 4,
            name: "Noah Donaldson",
            gender: "M",
            dateOfBirth: "2022-12-25 03:18:01",
            email: "sed.molestie@hotmail.ca",
            phone: "1-259-685-2522",
            address: "946-7315 Urna. Ave",
            creditCard: "402 40071 48461 319",
            contractType: "Parttime",
            jobPosition: "CEO",
        },
        {
            id: 5,
            key: 5,
            name: "Amy Gardner",
            gender: "F",
            dateOfBirth: "2022-03-07 11:45:19",
            email: "odio.phasellus.at@icloud.ca",
            phone: "1-676-439-4667",
            address: "P.O. Box 143, 4217 Interdum. Avenue",
            creditCard: "4485 4783 3796 8426",
            contractType: "Fulltime",
            jobPosition: "IT",
        },
        {
            id: 6,
            key: 6,
            name: "Felicia Salazar",
            gender: "M",
            dateOfBirth: "2023-10-20 21:29:47",
            email: "dictum.sapien.aenean@protonmail.ca",
            phone: "251-5722",
            address: "P.O. Box 348, 1118 Eu Street",
            creditCard: "491678 573252 2262",
            contractType: "Parttime",
            jobPosition: "Intern",
        },
        {
            id: 7,
            key: 7,
            name: "Kenneth Ballard",
            gender: "M",
            dateOfBirth: "2023-03-05 13:04:55",
            email: "erat.vel@hotmail.com",
            phone: "1-606-852-4566",
            address: "P.O. Box 287, 7825 Magna. Street",
            creditCard: "4556 397 44 6619",
            contractType: "Parttime",
            jobPosition: "Intern",
        },
        {
            id: 8,
            key: 8,
            name: "Ocean Irwin",
            gender: "F",
            dateOfBirth: "2022-10-29 02:48:05",
            email: "duis.dignissim@aol.ca",
            phone: "421-6744",
            address: "Ap #227-6865 Diam St.",
            creditCard: "4916 482 46 6684",
            contractType: "Parttime",
            jobPosition: "CTO",
        },
        {
            id: 9,
            key: 9,
            name: "Boris Parks",
            gender: "M",
            dateOfBirth: "2023-02-08 12:17:33",
            email: "tempus@aol.couk",
            phone: "655-4723",
            address: "172-1581 Arcu. Street",
            creditCard: "455645 486186 8724",
            contractType: "Parttime",
            jobPosition: "IT",
        },
    ]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const hasSelected = selectedRowKeys.length > 0;
    const [form] = Form.useForm();
    const rowSelection = {
        onChange: (newSelectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(newSelectedRowKeys);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },


    };
    const openCreateModal = () => {
        setIsCreate(true);
    }
    const onCreateUser = (data) => {
        setEmployees(pre => {
            return [...pre, data]
        })
        resetForm();
        form.resetFields();
        message.success("Add employee success!");
    }
    const resetField = () => {
        form.resetFields();
    }
    const onEditUser = () => {
        setEmployees(pre => {
            return pre.map(employee => {
                if (employee.id === editingEmployees.id) {
                    return editingEmployees
                } else {
                    return employee
                }
            })

        })
        resetForm()
        message.success("Update employee success!");
    }

    const onDeleteUser = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to Delete this employee?",
            okType: "danger",
            onOk: () => {
                setEmployees((pre) => {
                    return pre.filter(user => user.id !== record.id);
                })
                message.success("Delete employee success!");
            }

        })
    };
    const openEditModal = (record) => {
        setIsEditing(true);
        setEditingEmployees({...record})
    }
    const resetForm = () => {
        setIsEditing(false);
        setIsCreate(false);
        setEditingEmployees(null);
        setCreateEmployees(null);
    }
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
    const formItemLayout = {
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
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "1",
            width: "auto",
            render: (text) => <p style={{color: "#0000EE"}}>{text}</p>,
        },
        {
            title: "Date Of Birth",
            dataIndex: "dateOfBirth",
            key: "2",
            width: 120,
            ellipsis: true,
        },
        {
            key: "3",
            title: "Gender",
            dataIndex: "gender",
            width: 80,
            filters: [
                {
                    text: "Male (M)",
                    value: "M",
                },
                {
                    text: "Female (F)",
                    value: "F",
                },
                {
                    text: "Other (O)",
                    value: "O",
                },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.gender.startsWith(value),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "4",
            width: 150,

            render: (text) => <p style={{color: "#FFA500"}}>{text}</p>,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "5",
            width: "auto",
            ellipsis: true,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "6",
            width: "auto",
            ellipsis: true,
        },
        {
            title: "Action",
            key: "7",
            width: 80,
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {
                            openEditModal(record)
                        }}/>
                        <DeleteOutlined onClick={() => {
                            onDeleteUser(record)
                        }} style={{color: "red", marginLeft: 12}}/>
                    </>
                )
            },
        },
    ];

    return (
        <div>
            <Title style={{fontSize: "25",textAlign: 'center'}}>
                Employee Management
            </Title>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                 <span>
                <Button
                    type="primary"
                    disabled={!hasSelected}
                    style={{
                        marginRight: 8,
                    }}

                >Reload

                </Button>
                     {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>

                <Button className="btn-addEmployee" onClick={openCreateModal}>
                    <UserAddOutlined/>
                < /Button>
                <Modal
                    title="Add Employees"
                    open={isCreate}
                    onCancel={resetForm}
                    footer={false}
                >
                    <Form form={form} onFinish={onCreateUser} name="register" scrollToFirstError   {...formItemLayout} >
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
                                name="name"
                                placeholder="Please input your Name"
                            />
                        </Form.Item>

                        <Form.Item
                            name="dateOfBirth"
                            label="Date of Birth"

                            rules={[
                                {
                                    required: true,
                                    message: "Invalid Input Date of Birth",
                                },
                            ]}
                        >
                            <Input type="datetime-local"   name="dateOfBirth"/>
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

                            >
                                <Option value="M">Male</Option>
                                <Option value="F">Female</Option>
                                <Option value="Other">Other</Option>
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
                                placeholder="Please input your Address"
                            />
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
                            }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={resetField}>
                                Reset
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <div className={styles.navBar}>
                <div className={styles.block}>

                </div>

            </div>

            <Table
                rowSelection={{
                    ...rowSelection,
                }}

                columns={columns}
                dataSource={employees}
                pagination={{pageSize: 5}}
                onChange={onChange}
                scroll={{
                    x: 1000,
                    y: "calc(100vh - 350px)",
                }}
                searchable={true}
                exportable={true}
            />
            <Modal
                title="Edit Employees"
                open={isEditing}
                onCancel={resetForm}
                footer={false}
            >
                <Form onFinish={onEditUser} scrollToFirstError  {...formItemLayout}>
                    <Form.Item
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Name!",
                            },
                        ]}
                    >
                        <Input
                            value={editingEmployees?.name}
                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, name: e.target.value}
                                });
                            }}
                            placeholder="Please input your Name"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Date of Birth"
                        rules={[
                            {
                                required: true,
                                message: "Invalid Input Date Of Birth",
                            },
                        ]}
                    >
                        <Input
                            type="datetime-local"

                            value={editingEmployees?.dateOfBirth}

                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, dateOfBirth: e.target.value}
                                });
                            }}/>
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: "Please select gender!",
                            },
                        ]}
                    >
                        <Select
                            value={editingEmployees?.gender}
                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, gender: e}
                                });
                            }}
                            placeholder="Select your gender"
                        >
                            <Option value="M">Male</Option>
                            <Option value="F">Female</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item

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
                            value={editingEmployees?.phone}
                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, phone: e.target.value}
                                });
                            }}
                            placeholder="Please input your Phone Number"
                        />
                    </Form.Item>
                    <Form.Item
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
                            value={editingEmployees?.email}
                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, email: e.target.value}
                                });
                            }}
                            placeholder="Please input your Email"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Address!",
                            },
                        ]}
                    >
                        <Input
                            value={editingEmployees?.address}
                            onChange={(e) => {
                                setEditingEmployees((pre) => {
                                    return {...pre, address: e.target.value}
                                });
                            }}
                            placeholder="Please input your Address"
                        />
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
                        }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
        ;
}
;
export default User;
