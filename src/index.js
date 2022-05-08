import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM.render(<h1>' hola mundo! '</h1>, document.getElementById("app"));
const element = <p>Hello, world</p>;
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(element);
