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

}`
const bigKeyframes = keyframes`
from{
  
  transform: scale(1.5);
  opacity: 0;
  transition: 2s;
}
to{
  transform: scale(1.1);
  opacity: 1;
  transition: 2s;
}`
const sladeDownKeyframes = keyframes`
from{
  border: none;
  filter: blur(2px);
  opacity: 0;
  /* transform: scale(0.5); */
  margin-bottom: 100%;
  height: 50%;
  /* height: 0px; */
 
}
to{
  filter: blur(0);
  opacity: 1;

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

export const fadeIn = ({time='2s', type='ease'}={})=>{
  return css`animation: ${time} ${fadeInKeyframes} ${type};`
}
export const big = ({time='2s', type='ease'}={})=>{
  return css`animation: ${time} ${bigKeyframes} ${type};`
}
export const slidedown = ({time='3s', type='ease'}={})=>{
  return css`animation: ${time} ${sladeDownKeyframes} ${type};`
}
export const slideIn = ({time='2s', type='ease'}={})=>{
  return css`animation: ${time} ${slideInkeyframes} ${type};`
}



