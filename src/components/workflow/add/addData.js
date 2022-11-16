import React, { useState } from "react";

import { Button, Modal } from "antd";
import Formdata from "../form/formData";

const Add = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
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
        onCancel={handleCancel}
        footer={[false]}
      >
        <div>
          <Formdata setOpen={setOpen}/>
        </div>
      </Modal>
    </div>
  );
};

export default Add;
