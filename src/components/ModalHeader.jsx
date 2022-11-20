import { Modal } from 'antd';
import React, { useState } from 'react';
import ModalHeaderForm from './ModalHeaderForm';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a className="info_pozvoni" type="primary" htmlType="submit" onClick={showModal}>
      Заказать звонок
      </a>
      <Modal title="Заказать звонок" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <ModalHeaderForm onOk={handleOk}/>
      </Modal>
    </>
  );
};
export default App;
