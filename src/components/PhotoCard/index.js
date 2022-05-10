import React,{Fragment} from "react";
const IMG = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
import {MdFavoriteBorder ,MdOutlineNearMe ,MdOutlineMoreHoriz, MdFavorite } from 'react-icons/md'
import {
  Img, ImgWrapper, SendButton, LikeButton,
   Article, Div, Span, P, User, 
   ImgUser, UserP, Options, A } from "./styles";
   import { useLazyd } from "../../Hooks/useLazyd";
   import { useLocalStorage } from "../../Hooks/useLocalStorage";
   

const date= new Date
const dateComplete =` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
export const PhotoCard = ({id, likes=0,src})=>{
  const key = `like-${id}`;
  const{element,show} = useLazyd()
  const [liked , setLiked]= useLocalStorage(key, false)
  const Like = liked ? MdFavorite : MdFavoriteBorder

  
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
          <LikeButton onClick={()=>setLiked(!liked)} liked={liked}>
            <Like size="32px"/> 
          </LikeButton>
          <SendButton>
            <MdOutlineNearMe size="32px"/>
          </SendButton>
        </Div>      
        <Span>
          liked by {likes } anilovers!!
          <P>{dateComplete}</P>    
        </Span>
      </Fragment> } 
    </Article>
  )
} 

