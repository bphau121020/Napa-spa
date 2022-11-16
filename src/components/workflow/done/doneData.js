import React from "react";

import { Modal } from "antd";
const Done = ({ isModalOpen, setIsModalOpen, handleOk }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Done the task!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        You will not be able to recover it!!!
      </Modal>
    </>
  );
};

export default Done;
