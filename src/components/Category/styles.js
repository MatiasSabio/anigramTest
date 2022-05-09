import styled from 'styled-components'

export const Anchor = styled.a`
display: flex;
flex-direction: column;
/* text-align: center; */
text-decoration: none;
position: relative;
transition: 1s;
:hover{
  transition: 1s;
  transform: scale(1.15);
  }
`
export const Image = styled.img`
border: 1px solid #ddd;
box-shadow: 0px 10px 14px rgba(0,0,0, .2);
border-radius: 50%;
height: auto;
overflow: hidden;
object-fit: cover;
height: 75px;
width: 75px;
`
export const Div = styled.div`
z-index: 100;
position:absolute;
left:28px;
top:-12px;
`
