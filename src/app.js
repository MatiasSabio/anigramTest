import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Body } from './components/Body';
import { NavBar } from './components/NavBar';
import { FootBar } from './components/FootBar';

export const App = () => ( 
  <div id='global'>
    <GlobalStyle/>
    <NavBar/>
    <Body/>
    <FootBar/>
  </div>
)
