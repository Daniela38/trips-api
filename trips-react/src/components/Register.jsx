import React from "react";
import { useState } from "react";

export default function Register(){

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'user'
    });
    
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
            console.log('la respuesta es ' + response)
            const result = await response.json();
            console.log(result);

        } catch(error) {
            throw new Error(error.message);
        }
    }

    return(
        <div>
            <h2>Registrate</h2>
            <form onSubmit={handleSubmitRegister}>
                <label>Nombre</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChangeRegister}/>
                <label>Apellido</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChangeRegister}/>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChangeRegister}/>
                <label>Contraseña</label>
                <input type="password" name="password" value={formData.password} onChange={handleChangeRegister}/>
                <input type="submit" />
            </form>
        </div>
    )
}