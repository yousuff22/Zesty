import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";


// React.createElement => ReactElement-JS(Object) => HtmlElement(render)

// Creating react ele without JSX
const h1 = React.createElement("h1", {id: "heading"}, "Hello from index2");

// these both code are same

// Creating react ele with JSX
// JSX (transpiled before it reaches the JS Engine) pracel package Babel transpiled your code in js so browser can understand

// JSX => React.createElement => ReactElement-JS(Object) => HtmlElement(render)
const JSXh1 = <h1 id="heading" className="JSXclass" >Hello I am H1 created using JSX</h1>

// Objects
console.log(h1);
console.log(JSXh1);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXh1);
