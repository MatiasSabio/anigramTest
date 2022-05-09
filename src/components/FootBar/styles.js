import styled from 'styled-components'


export const IconsDiv = styled.div`
bottom: 0px;
display: flex;
border-top: 1px solid rgba(100,100,100,0.3);
position: fixed;
z-index: 100;
width: 500px;
border-bottom:1px solid rgba(100,100,100,0.3);
background-color: rgba(0,0,0,0.4);
justify-content: space-around;
height: 50px;
:hover{
  background-color: rgba(0,0,0,0.9);
}
`
export const HomeButton = styled.button`
text-decoration: none;
color: rgba(200,200,200,0.4);
:hover{
  color: pink;
}
`
export const SarchButton = styled.button`
text-decoration: none;
color: rgba(200,200,200,0.4);
:hover{
  color: lightblue;
}
`
export const UserButton = styled.button`
text-decoration: none;
color: rgba(200,200,200,0.4);
:hover{
  color: white;
}
`
