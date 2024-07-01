import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";
import { appContext } from "../context/AppContext";

function NavBar() {

    const {user} = useContext(appContext);
    const {setUser} = useContext(appContext);

    const handleLogout = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/flights/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            setUser(null);
        } catch(error) {
            throw new Error(error.message);
        }
    }

    return (
        <div className="style-navbar">
            <nav className ="navbar navbar-expand-lg">
                <div className ="container-fluid navbar-container">
                    <Link to="/"><img src="img/logo.png" alt="logo" className="logo"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categories/vuelos-Argentina" className="nav-link active">Vuelos nacionales</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categories/paquetes-Argentina" className="nav-link active">Paquetes nacionales</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vuelos internacionales</NavLink>                        
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item">
                                        <NavLink to="/categories/america-del-sur" className="dropdown-item">América del Sur</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to="/categories/caribe" className="dropdown-item">Caribe</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to="/categories/estados-unidos" className="dropdown-item">Estados Unidos</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to="/categories/europa" className="dropdown-item">Europa</NavLink>
                                    </li>
                                </ul>
                        </li>
                        {user ? (
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.email}</NavLink>
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item">
                                        <NavLink to="/login" className="dropdown-item" onClick={handleLogout}>Cerrar sesión</NavLink>
                                    </li>
                                </ul>
                            </li>
                        ): (
                            <Link to="/login" className="nav-link active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                                    Ingresar
                            </Link>
                        )}
                        {/*
                        <li className="nav-item">
                            {user ? (
                                <span>{user.email}</span>
                            ) : (
                                <Link to="/login" className="nav-link active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                    Ingresar
                                </Link>
                            )}
                        </li>
                        */}
                    </ul>
                    </div>
                    <CartWidget/>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;