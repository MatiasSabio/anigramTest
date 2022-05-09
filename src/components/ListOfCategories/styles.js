import styled from 'styled-components'
 import {slideIn} from '../../styles/animations.js'

export const List = styled.ul`
display: flex;
overflow: scroll;
width: 100%;
padding-left: 0px;
${slideIn()}
&::-webkit-scrollbar {
    display: none;
  }  
  padding-bottom: 20px;
  padding-top: 20px;
` 
export const Item = styled.li`
padding: 0 8px;
`
