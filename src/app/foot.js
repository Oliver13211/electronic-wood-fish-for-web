'use client'
import { Modal } from "antd";
import React, { useState } from 'react';
export default function Foot(){
    return(
      <footer id="foot">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div id="foot-flex">
            <a className="foot-text" style={{textDecoration: 'none'}} href="http://www.wzwblog.cn">我的博客</a>
            <Alert2/>
            <Alert1/>
        </div>
        <div style={{marginRight:"20%"}}><h1 id="title" style={{fontSize:"2em"}}>电子木鱼</h1>
        <p id="title-sub">王中王荣誉出品</p></div>
        </div>
      </footer>
    )
  }
const Alert1 = () => {
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
      <a className="foot-text" onClick={showModal}>关于本软件</a>
      <Modal
        title="关于本软件"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>本软件是一个电子木鱼软件，欢迎使用！</p>
      </Modal>
    </>
  );
};
const Alert2 = () => {
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
      <a className="foot-text" onClick={showModal}>联系我</a>
      <Modal
        title="联系我"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>bug反馈、意见投递等请发邮件至2995306790@qq.com，并注明来意，谢谢！</p>
      </Modal>
    </>
  );
};