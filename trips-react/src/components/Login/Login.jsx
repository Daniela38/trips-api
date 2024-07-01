import React, { useContext } from "react";
import { useState} from "react";
import Swal from "sweetalert2";
import { appContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './login.css';

export default function Login() {
    
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });
    const {setUser} = useContext(appContext);
    const navigate = useNavigate();

    const handleChangeLogin = (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    };

    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/api/flights/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formLogin)
            });
            if (response.status === 401) {
                await Swal.fire({
                    title: "Usuario y/o contraseña incorrectos",
                    icon: "error",
                    timer: 2000
                })
                return;
            }
            const result = await response.json();
            setUser({email: formLogin.email});
            const loginSuccess = await Swal.fire({
                title: "Login exitoso",
                icon: "success",
                timer: 1500
            })
            navigate('/');
        } catch(error) {
            throw new Error(error.message);
        }
    }

    {/*
        <form onSubmit={handleSubmitLogin}>
                <label>Email</label>
                <input type="email" name="email" value={formLogin.email} onChange={handleChangeLogin}/>
                <label>Contraseña</label>
                <input type="password" name="password" value={formLogin.password} onChange={handleChangeLogin}/>
                <input type="submit"/>
            </form>
    */}

    return(
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmitLogin} className="form">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={formLogin.email} onChange={handleChangeLogin}/>
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={formLogin.password} onChange={handleChangeLogin}/>
                <label for="floatingPassword">Password</label>
            </div>
            <input type="submit"/>
            </form>
            <p>¿No tenes una cuenta? Registrate <Link to="/register">acá</Link> </p>
        </div>
    )
}