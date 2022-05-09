import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiHome5Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { IconsDiv } from "./styles";
import { HomeButton } from "./styles";
import { SarchButton } from "./styles";
import { UserButton } from "./styles";


export const FootBar =()=>{
  return(
  <IconsDiv>
    <HomeButton href="#app">
    <RiHome5Line  size="35px"/>
    </HomeButton>
    <SarchButton>
    <RiSearch2Line  size="35px"/>
    </SarchButton>
    <UserButton>
    <RiAccountCircleLine size="35px"/>
    </UserButton>
  </IconsDiv>
  );
}
