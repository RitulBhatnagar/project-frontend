import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
// margin-left: 60px;
font-size: 14px;
font-weight: 500;
font-family: var(--font-lato);
color: white;
  width: 100%;
  height: 37px;
  display: flexbox;
  cursor: pointer;
  padding-top: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
const Img = styled.img`
float: left;
margin-top: 3px;
margin-left: 20px;

`
const DropImg = styled.img`
margin-top : 8px;
margin-left : 20px;
`
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background:  #0E1B2D;
  font-size: 14px;
font-weight: 500;
font-family: var(--font-lato);
color: white;
  width: 100%;
  height: 37px;
  display: flexbox;
  cursor: pointer;
  padding-top: 5px;
  text-decoration: none;
  &:hover {
    border-left : 1px solid white;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
         <Img src = {item.icon} alt = ""/>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? <DropImg src = {item.iconOpened} alt = ""/>
            : item.subNav
            ? <DropImg src = { item.iconClosed} alt = ""/>
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <Img src = {item.icon} alt = ""/>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
