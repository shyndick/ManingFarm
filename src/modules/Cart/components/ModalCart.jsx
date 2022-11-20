
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import FormCart from './CartForm';
const App = ({cart, deleteAllCart}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.setItem('zakaz', JSON.stringify(cart))
    deleteAllCart()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="zakaz_btn" type="primary" htmlType="submit" onClick={showModal}>
        Оформить заказ
      </Button>
      <Modal title="Оформление заказа" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <FormCart onOk={handleOk}/>
      </Modal>
    </>
  );
};
export default App;
