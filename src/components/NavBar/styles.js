import styled from 'styled-components'


export const NavDiv = styled.div`
display: flex;
justify-content: space-between;
align-self: center;
position: fixed;
top: 0px;
z-index: 100;
width: 500px;
border-bottom:1px solid rgba(100,100,100,0.3);
background-color: rgba(0,0,0,0.4);
:hover{
  background-color: rgba(0,0,0,0.9);
}
`
export const Item = styled.li`
border: 1px solid rgba(100,100,100,0.3);
/* box-shadow: 0px 10px 10px rgba(300,300,300, .25); */
margin-bottom: 20px;
`
