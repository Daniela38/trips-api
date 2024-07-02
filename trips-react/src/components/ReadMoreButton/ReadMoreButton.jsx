import React from "react";
import { Link } from "react-router-dom";
import './readMoreButton.css';

export default function ReadMoreButton(props) {

    return(
        <div className="custom-btn"> 
            <Link to={`/categories/${props.category}/${props.id}`} className ="btn btn-primary">Ver más</Link>
        </div>
    )
}