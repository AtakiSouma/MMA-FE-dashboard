/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import React from "react";
import { TeachersData } from "../models/user.models";
type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  showModal: any;
  handleOk: any;
  handleCancel: any;
  item:TeachersData | null
};
const ModalComponentInTeacher = (props: Props) => {
  const { setIsModalOpen, showModal,item, handleCancel, handleOk, isModalOpen } =
    props;
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{item?.name}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalComponentInTeacher;
