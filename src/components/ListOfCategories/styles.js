import styled, {css} from 'styled-components'
 import {slideIn, slidedown} from '../../styles/animations.js'

export const List = styled.ul`
display: flex;
overflow: scroll;
width: 100%;
padding-left: 0px;
padding-bottom: 20px;
padding-top: 20px;
${slideIn()}
&::-webkit-scrollbar {
    display: none;
  } 
   ${props=> props.fixed && css`{
      position: fixed;
      top:55px;
      width: 400px;
      height: 110px;
      margin:0 auto;
      padding-top: 15px;
      left: 0px;
      right: 0px;
      border-radius: 25px;
      box-shadow: 0, 0, 20px rgba(0,0,0,0.9);
      z-index: 100;
      transition: 2s;
      transform: scale(0.8);
      ${slidedown()}
  }
   `}

` 
export const Item = styled.li`
padding: 0 8px;
`
