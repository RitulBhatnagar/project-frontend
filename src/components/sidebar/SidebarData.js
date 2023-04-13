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
    title : "Dashboard",
    path : "/dashboard",
    icon : dashicon
  },
  {
    title : "Entity Master",
    path : "/entity",
    icon : entityicon
  },
  {
    title : "Client Master",
    path : "/client",
    icon : clienticon
  },
  {
    title : "Engagement Master",
    path : "/engage",
    icon : engageicon
  },
  {
    title : "User Id Master",
    path : "/userid",
    icon : usericon
  },
  {
    title : "Data Operations",
    icon : fileicon,
    iconClosed : downicon,
    iconOpened : upicon,

    subNav : [
      {
        title : "Upload",
        path : "/upload"
      },
      {
        title : "Analysis",
        path : "/analysis"
      }
    ]
  }
]