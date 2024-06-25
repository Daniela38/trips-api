import React from "react";
import './item.css';
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

export default function Item(props) {

    return(
        <div className = "card" style = {{width: "18rem"}}>
            <img src={props.img} className ="card-img-top" alt="imagen del viaje"/>
            <div className ="card-body">
                <h3 className ="card-title">{props.title}</h3>
                <h4 className ="card-text">Precio: USD {props.price}</h4>
                <ReadMoreButton id={props.id} category={props.category}/>
            </div>
        </div>
    )
}