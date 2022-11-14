import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function ModalDeleteEmployee(props) {
  const modal = Modal.confirm({
    title: "Delete this Employee",
    icon: <ExclamationCircleOutlined />,
    content: "Do you want to Delete this Employee  ?",
    okText: "Delete",
    okType: "danger",
    cancelText: "Cancel",
  });
}
export default ModalDeleteEmployee;
