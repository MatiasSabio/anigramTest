import {css, keyframes} from 'styled-components'

const fadeInKeyframes = keyframes`
from{
  border: none;
  filter: blur(5px);
  opacity: 0;
  margin-top: 100%;
}
to{
  filter: blur(0);
  opacity: 1;
  margin-top: 0%;

}
`
const slideInkeyframes = keyframes`
  from{
    filter: blur(3px);
    margin-left:100%;
    width: 300%;
    opacity: 0;
  }
  to{  
    filter: blur(0);
   margin-left: 0%;
   width: 100%;
   opacity: 1;

  }`

export const fadeIn = ({time='1s', type='ease'}={})=>{
  return css`animation: ${time} ${fadeInKeyframes} ${type};`
}
export const slideIn = ({time='2s', type='ease'}={})=>{
  return css`animation: ${time} ${slideInkeyframes} ${type};`
}



