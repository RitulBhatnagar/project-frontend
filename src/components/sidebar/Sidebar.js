import React from 'react'
// import "./sidebar.css"
import {Link} from "react-router-dom"
import {useState} from  "react"
import styled from  "styled-components";
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
const SidebarNav = styled.div`
position: sticky;
left: 0;
top: 0;
width: 220px;
height:1600px;
background: #0E1B2D;
flex: 1;
`;

const SidebarWrap = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
 width: 100%;
 margin-top: 40px;
  margin-bottom : 100px;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
    <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
    </>
  )
}

export default Sidebar;