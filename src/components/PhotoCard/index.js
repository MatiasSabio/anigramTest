import React from "react";
const IMG = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
import { ImgWrapper } from "./styles";
import { Img } from "./styles";
import { LikeButton } from "./styles";
import { SendButton } from "./styles";
import {MdFavoriteBorder} from 'react-icons/md'
import {MdOutlineNearMe} from 'react-icons/md'
import {MdOutlineMoreHoriz} from 'react-icons/md'
import { Article } from "./styles";
import { Div } from "./styles";
import { Span } from "./styles";
import { P } from "./styles";
import { User } from "./styles";
import { ImgUser } from "./styles";
import { UserP } from "./styles";
import { Options } from "./styles";
import { A } from "./styles";


const date= new Date
const dateComplete =` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
console.log(dateComplete);
export const PhotoCard = ({id, likes=0,src})=>{
  return(
    <Article>     
        <User>
          <A href={`/user/${id}`}>
          <ImgUser src= {IMG} />
          <UserP>El_User_Fulanito</UserP>
          </A>
          <Options>
          <MdOutlineMoreHoriz size="35px" />
          </Options>
          
        </User>
      
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src= {IMG} />
        </ImgWrapper>
      </a>
        <Div>
          <LikeButton>
            <MdFavoriteBorder size="32px"/> 
          </LikeButton>
          <SendButton>
            <MdOutlineNearMe size="32px"/>
          </SendButton>
        </Div>      
        <Span>
          liked by {likes } aniloves!!
          <P>{dateComplete}</P>    

        </Span>
    </Article>
  )
} 
