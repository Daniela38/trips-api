import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'user'
    });

    const navigate = useNavigate();
    
    const handleChangeRegister = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmitRegister = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/api/flights/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            const registerSuccess = await Swal.fire({
                title: "Registro exitoso",
                text: `¡Hola ${formData.first_name}!`,
                icon: "success",
                timer: 1500
            })
            navigate('/');
        } catch(error) {
            throw new Error(error.message);
        }
    }

    return(
        <div>
            <h2>Registrate</h2>
            <form onSubmit={handleSubmitRegister} className="form">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name="first_name" value={formData.first_name} onChange={handleChangeRegister}/>
                <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" name="last_name" value={formData.last_name} onChange={handleChangeRegister}/>
                <label for="floatingInput">Apellido</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" name="email" value={formData.email} onChange={handleChangeRegister}/>
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" name="password" value={formData.password} onChange={handleChangeRegister}/>
                <label for="floatingPassword">Contraseña</label>
            </div>
                <input type="submit" />
            </form>
        </div>
    )
}