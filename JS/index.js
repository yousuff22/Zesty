import React from "react";
import ReactDOM from "react-dom/client";

// nested structure
{/* 
    <div id="parent">
    <div id="child">
        <h1></h1>
    </div> 
</div> 
*/}


const headling2 = React.createElement('h1', {id: "headling"}, "Hello I am H1")
const child = React.createElement('div', {id: "child"}, headling2)
const parent = React.createElement('div', {id: "parent"}, child)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// basic

// const headling = React.createElement(
//   "h1",
//   { class: "BKL" },
//   "Hello from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headling);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// with siblings
{/* 
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div> 
    </div> 
*/}

// const parent2 = React.createElement("div", {id: "parent"},
//     React.createElement("div", {id: "child"},
//         [React.createElement("h1", {}, "H1 headling"), 
//             React.createElement("h2", {}, "H2 headling")]
//         )
//     )
    
// console.log(parent2);

// root.render(parent2);