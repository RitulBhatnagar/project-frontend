import React from 'react'
import dashicon from "../../assets/dashicon.png"
import entityicon from "../../assets/entityicon.png"
import clienticon from "../../assets/clienticon.png"
import usericon from "../../assets/usericon.png"
import engageicon from "../../assets/engageicon.png"
import upicon from "../../assets/upicon.png";
import downicon from "../../assets/dropicon.png"
import fileicon from "../../assets/fileicon.png"

export const SidebarData = [
  {
    title : "Home",
    path : "/home",
    icon : dashicon
  },
  {
    title : "User",
    icon : usericon,
    iconClosed : downicon,
    iconOpened : upicon,
    subNav :[
      {
        title : "Client",
        path : "/client"
      },
      {
        title : "Engagement",
        path : "/engage",
        iconClosed : downicon,
        iconOpened : upicon,
        subNav : [
        {  
          title : "Data operations",
          icon : fileicon
      }
        ]
      }
    ]
  },
 
  {
    title : "Admin",
    icon : fileicon,
    iconClosed : downicon,
    iconOpened : upicon,

    subNav : [
      {
        title : "Entity",
        path : "/entity"
      },
      {
        title : "User",
        path : "/userid"
      }
    ]
  }
]