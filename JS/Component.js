import React from "react";
import ReactDOM from "react-dom/client";

const num = 10;

const heading = <h1>Heading</h1>

// component
const Heading = () => (
  <div>
    <h1>Hello</h1>  
    // JS variable
    { num }
    // Normal React Element
    { heading }
    <h2>Two</h2>
  </div>
);

const elem = <span>Span Tag</span>

const HeadingComponent = () => {
  return (
    <>
    <h1>React Functional Component</h1>
    </>
  )
}

// React element
const title = (
  <h1>
    { elem }
    Namaste React using JSX
    
    {HeadingComponent()}
    <HeadingComponent/> 
    <HeadingComponent></HeadingComponent>
  </h1>
)


// React Functional component

// Component composition
const FirstCompo = () => {
  return (
    <>
      <h1>Functional component</h1>
      <Name />
      <h2>Pikachu</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
