import { Button, Modal } from "antd";
import FormItem from "./FormItem";
import { useState } from "react";

function ModalUpdateEmployee(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
    props.onUpdate(props.data.key);
  };

  return (
    <>
      <Button type="primary" size="small" onClick={showModal}>
        Update
      </Button>
      <Modal
        title="Update Employee"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Update"
        cancelText="Cancel"
      >
        <FormItem data={props.data} />
      </Modal>
    </>
  );
}
export default ModalUpdateEmployee;
