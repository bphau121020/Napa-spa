import { Button, Modal } from "antd";
import FormItem from "./FormItem";
import { useState } from "react";

function ModalCreateEmployee(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
    props.onAdd();
  };
  return (
    <>
      <Button primary onClick={showModal}>
        Create
      </Button>
      <Modal
        title="Create Employee"
        open={open}
        onCancel={hideModal}
        onOk={hideModal}
        okText="Create"
        cancelText="Cancel"
      >
        <FormItem />
      </Modal>
    </>
  );
}
export default ModalCreateEmployee;
