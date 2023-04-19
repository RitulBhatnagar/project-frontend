import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
// import dashicon from "../../assets/dashicon.png"
// import entityicon from "../../assets/entityicon.png"
// import clienticon from "../../assets/clienticon.png"
// import usericon from "../../assets/usericon.png"
// import engageicon from "../../assets/engageicon.png"
// import upicon from "../../assets/upicon.png";
// import downicon from "../../assets/dropicon.png"
// import fileicon from "../../assets/fileicon.png"

import { Button, Menu, ConfigProvider } from 'antd';
import { useState } from 'react';
import 'antd/dist/reset.css';
import "./sidebar.css"
import {useNavigate} from "react-router-dom"

import {AiOutlineFolderOpen, AiOutlineFileDone, AiOutlineUser} from "react-icons/ai"
import {TiShoppingBag} from "react-icons/ti"
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', 'home'),
  getItem('User', 'user',  null,[
    getItem('My client', 'client', <AiOutlineUser/>),
    getItem("Data Operation", "data", <AiOutlineFolderOpen/>, [getItem("Upload", "upload"), getItem("Analysis", "analysis")]),
    getItem('My Engagement', 'engage', <AiOutlineFileDone/>),
  ]),
  getItem('Admin', 'admin', null, [
      getItem("Entity Master", "entity", <TiShoppingBag/>), getItem("User Id Master", "userid", <AiOutlineUser/>)
  ]),
];
const SideMenu = () => {
  const navigate = useNavigate();
  const onClick= (e) => {
    console.log(e.path);
    navigate(`/${e.key}`)
  }

  return (
    <div
      className = "sidebar"
      
    >
      <ConfigProvider
      theme={{
        token :{
          colorBgTextHover : "#ffffff1a",
          colorBgTextActive : "#ffffff1a",
          colorText : "white",
          colorIconHover : "white",
          colorIcon  : "white",
          colorBgBase:"#ffffff1c",
          colorBgContainer : "#ffffff1c",
        }
      }}
      >
 
      <Menu
        
        mode="inline"
        items={items}
        style  = {{backgroundColor : "#0E1B2D", color : "white",}}
        onClick={onClick}
      />
      </ConfigProvider>
    </div>
  );
};
export default SideMenu;