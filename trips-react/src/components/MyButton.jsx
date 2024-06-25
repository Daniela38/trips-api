import React from "react";

export default function MyButton(props) {

    return(
        <button type="button" className="btn btn-outline-dark" onClick={props.onPress}> {props.children} </button>
    )
}