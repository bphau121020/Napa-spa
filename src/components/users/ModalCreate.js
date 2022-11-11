
import {Button, Modal} from "antd";
import FormItem from "./FormItem";
import {useState} from "react";

function ModalCreateEmployee (props) {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    const onSubmit = (value) => console.log(value);
    return (
        <>
            <Button primary onClick={showModal}>Create
            </Button>
            <Modal
                title="Create Employee"
                open={open}
                onOk={onSubmit}
                onCancel={hideModal}
                okText="Create"
                cancelText="Cancel"
            >
                <FormItem onSubmit={onSubmit}/>
            </Modal>
        </>
    );
}
export default ModalCreateEmployee;
