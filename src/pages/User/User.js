import {Button, Space, Table, Typography} from 'antd';
import Search from "antd/es/input/Search";
import ModalCreateEmployee from "../../components/users/ModalCreate";
import ModalUpdateEmployee from "../../components/users/ModalUpdate";
import ModalDeleteEmployee from "../../components/users/ModalDelete";
import userData from "../../assets/JsonData/userData.json";
import {useSelector} from "react-redux";
import {useState} from "react";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'NickName',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: [
            {
                text: 'Male',
                value: 'Male',
            },
            {
                text: 'Female',
                value: 'Female',
            },
        ],
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: (text) => <p style={{color: '#FFA500'}}>{text}</p>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                < ModalUpdateEmployee/>
                <Button type="primary" danger onClick={ModalDeleteEmployee}>Delete</Button>
            </Space>
        )
    },
];

const onSearch = (value) => console.log(value);
const onSubmit = (value) => console.log(value);
const {Title} = Typography;

const User = () => {
    const {isLogged, user} = useSelector((state) => state.auth);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const hasSelected = selectedRowKeys.length > 0;
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (

        <div>
            <div style={{float: 'right'}}>Logged in account: <a><span
                style={{color: '#FFA500'}}>{isLogged ? user.name : "login"}</span></a></div>
            <br/>
            <Title style={{textAlign: 'center'}}>Employee Management</Title>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 40}}>
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
                < ModalCreateEmployee onSubmit={onSubmit} primary/>
            </div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={userData} pagination={{pageSize: 5}}/>
        </div>
);
}
export default User;
