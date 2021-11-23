import React from "react";

function MyInput(props) {
    return <input className = {"MyInput" + ' ' + props.className} placeholder = "i'm input">
        </input>;
}

export default MyInput