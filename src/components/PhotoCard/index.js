import React,{Fragment} from "react";
const IMG = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
import {MdFavoriteBorder ,MdOutlineNearMe ,MdOutlineMoreHoriz } from 'react-icons/md'
import {
  Img, ImgWrapper, SendButton, LikeButton,
   Article, Div, Span, P, User, 
   ImgUser, UserP, Options, A } from "./styles";
import { LazyDazy } from "../../Hooks/CustomHooks";


const date= new Date
const dateComplete =` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
console.log(dateComplete);
export const PhotoCard = ({id, likes=0,src})=>{
  const{element,show} = LazyDazy()
 
  
  return(
    <Article ref={element}>   
    {show && <Fragment>
        <User>
          <A href={`/user/${id}`}>
          <ImgUser src= {src} />
          <UserP>User_Fulanito</UserP>
          </A>
          <Options>
          <MdOutlineMoreHoriz size="35px" />
          </Options>          
        </User>      
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src= {src} />
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
      </Fragment> } 
    </Article>
  )
} 

