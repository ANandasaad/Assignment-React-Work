import React from "react";
import  ReactDOM  from "react-dom/client";


const head1=React.createElement("h1",{id:"h1"},"Hello H1");
const head2=React.createElement("h2",{id:"h2"},"Hello h2");
const head3=React.createElement("h3",{id:"h3"},"Hello h3");


const heading1=<h1>Heading 1</h1>
const heading2=<h2>Heading2</h2>
const heading3=<h3>Heading3</h3>


const Header=()=>{
    return (<div id="title">
        {head1}
        {head2}
        {heading2}
        <div>
            <p>lorem</p>
        </div>
    </div>);
}
const div=React.createElement("div",{id:"title"},[head1,head2,head3,heading1,heading2,heading3]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);