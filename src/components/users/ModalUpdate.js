
import {Button, Modal} from "antd";
import FormItem from "./FormItem";
import {useState} from "react";

function ModalUpdateEmployee(props) {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>Update
            </Button>
            <Modal
                title="Update Employee"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="Update"
                cancelText="Cancel"
            >
                <FormItem/>
            </Modal>
        </>
    );
}
export default ModalUpdateEmployee;
