import React from 'react';
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import { App } from './app'
// ReactDOM.render(<App/>, document.getElementById("app"));

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
