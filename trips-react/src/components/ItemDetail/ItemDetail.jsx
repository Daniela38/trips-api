import React from "react";
import './itemDetail.css';

export default function ItemDetail(props) {

    return(
        <div className="card-container">
        <div className = "card custom-card" style = {{width: "18rem"}}>
            <img src={props.product.img} className ="card-img-top" alt="imagen del viaje"/>
            <div className ="card-body">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849"/>
                </svg>
                {props.product.title === "Paquete a Mendoza" ? (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                    <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
                </svg>) : ("")}
                </div>
                <h5>{props.product.route}</h5>
                <p>Salida - Llegada:</p>
                <h6>{props.product.airports}</h6>
                <p>{props.product.departureTime} hs - {props.product.arrivalTime} hs</p>
                <p>Cantidad: {props.children}</p>
            </div>
        </div>
        </div>
    )
}