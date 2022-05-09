import React from "react";
import { IoMdAdd } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";
import { IconsDiv } from "./styles";
import { NotifButton } from "./styles";
import { AddButton } from "./styles";


export const NavIcons =()=>{
  return(
  <IconsDiv>      
    <AddButton>
    <IoMdAdd  size="25px"/>
    </AddButton>
    <NotifButton>
    <RiNotification2Line size="25px"/>
    </NotifButton>    
  </IconsDiv>
  );
}
