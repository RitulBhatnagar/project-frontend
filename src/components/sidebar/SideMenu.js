import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import 'antd/dist/reset.css';
import "./sidebar.css"
import {useNavigate} from "react-router-dom"
function getItem(label, key, img, children, type) {
  return {
    key,
    img,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', 'home'),
  getItem('User', 'sub1',  <AppstoreOutlined/>,[
    getItem('My client', 'client'),
    getItem('My Engagement', 'engage', null, [getItem("Data Operation", "sub3", null, [getItem("Upload", "upload"), getItem("Analysis", "analysis")])]),
  ]),
  getItem('Admin', 'sub4', null, [
      getItem("Entity Master", "entity"), getItem("User Id Master", "userid")
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
 
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        style  = {{backgroundColor : "#0E1B2D", color : "white",}}
        onClick={onClick}
      />
    </div>
  );
};
export default SideMenu;