import React from "react";
import { NavIcons } from "./NavIcons";
import { Logo } from "../Logo";
import { NavDiv } from "./styles";


export const NavBar =()=>{
  return(
    <NavDiv>
      <Logo/>
      <NavIcons/>
    </NavDiv>

  )
}
