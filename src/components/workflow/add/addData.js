import React, { useState } from "react";

import { Button, Modal } from "antd";
import Formdata from "../form/formData";

const Add = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Tasks
      </Button>
      <Modal
        open={open}
        title="Add New Tasks"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <div>
          <Formdata />
        </div>
      </Modal>
    </div>
  );
};

export default Add;
