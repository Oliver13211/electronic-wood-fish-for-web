'use client'
import React, { useState, useRef } from 'react';
import { message } from 'antd';
let count = 0;
export default function Body() {
  const [messageApi, contextHolder] = message.useMessage();
  const [text, setText] = useState(count);
  const audioRef = useRef(null);
  const click =
  ()=>{count++;setText(count);audioRef.current.play();messageApi.info('功德+1');};
  const handleKeyDown = (event) => {
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
      click();
    }
  };

  React.useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        click();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);
  return (
    <div id="body" tabIndex={0} onKeyDown={handleKeyDown}>
      <audio src='http://www.wzwblog.cn/wp-content/uploads/2025/07/sound.mp3'  ref={audioRef}></audio>
    <p style={{color:"white",textAlign:"center",fontSize:"20px"}}>功德：{text}</p>
    <img src="http://www.wzwblog.cn/wp-content/uploads/2025/07/muyv.png" alt="木鱼" style={{width:"30%",height:"30%",display:"block",margin:"0 auto"}} onClick={click}></img>
    {contextHolder}
    </div>
  );
}