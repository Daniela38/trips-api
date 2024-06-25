import React from "react";
import "./home.css";

export default function Home() {

    return(
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <h1>¡Planifica acá tu próximo viaje!</h1>
                    <div class="carousel-item active">
                        <img src="/img/vuelo-Mendoza.jpg" class="d-block w-100" alt="Mendoza"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Ofertas en vuelos a Mendoza</h3>
                            <p>Varias fechas disponibles</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/paquete-Mendoza.jpg" class="d-block w-100" alt="paquete"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Paquetes a destinos de Argentina</h3>
                            <p>Paga en 12 cuotas sin interés</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/roma.jpeg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Vuelos al exterior</h3>
                            <p>Podes pagar directamente en dólares</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}