import styled, {keyframes} from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Article = styled.article`
position: relative;
display: flex;
flex-direction: column;
/* border: 1px solid rgba(200,200,200,0.3); */
${fadeIn()}
`
export const User = styled.div`
width: 100%;
color: rgba(200,200,200,0.7);
display: grid;
grid-template-columns: auto 40px;
align-items: center;
padding: 10px;
`
export const A = styled.a`
text-decoration: none;
color: rgba(200,200,200,0.7);
display: flex;
align-items: center;
`
export const ImgUser = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;

transition: 1s;
:hover{
  transition: 1s;
  border-color: pink;
  transform: scale(1.15);
}
`
export const UserP = styled.p`
font-size: large;
margin-left: 10px;
`
export const Options = styled.div` 
:hover{
  color: white;
}
 `
export const ImgWrapper = styled.div`
height: 0;
overflow: hidden;
padding: 56.25% 0 0;
position: relative;
width: 100%;
`
export const Img = styled.img`
height: 100%;
object-fit: cover;
position: absolute;
top: 0px;
width: 100%;
`
export const LikeButton = styled.button`
padding-top: 10px;
padding-left: 10px;
color: rgba(200,200,200,0.7);
display: flex;
align-items: center;
& svg {
  margin-right: 10px;
}
:hover{
  color: pink;
}`
export const SendButton = styled.button`
padding-top: 10px;
color: rgba(200,200,200,0.7);
display: flex;
align-items: center;
transform: rotateZ(5deg);
transition: 1s;
& svg {
  margin-right: 10px;
}
:hover{
  transition: 1s;
  transform: rotateZ(-10deg);
  color: lightblue;
}
`
export const Div = styled.div`
display: flex;
align-items: center;
`
export const Span = styled.span`
padding-left: 15px;
color: rgba(200,200,200,0.7);
display: flex;
flex-direction: column;
font-size: medium;
`
export const P = styled.p`
color: rgba(200,200,200,0.4);
font-size: small;
`
