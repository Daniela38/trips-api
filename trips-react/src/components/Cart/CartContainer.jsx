import React, { useContext} from "react";
import { appContext } from "../context/AppContext";
import './cartContainer.css';
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function CartContainer() {
    
    const {cart, removeFromCart, clearCart} = useContext(appContext);
    console.log(cart);
    const {user} = useContext(appContext);

    const navigate = useNavigate();

    let total = 0;
    cart.forEach((product) => {
        total += product.count * product.price;
        console.log(product);
    });

    async function finalizePurchase () {
        if (!user) {
            toast.error("Debes iniciar sesión antes de finalizar la compra", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/login');
            }, 5000); 
            return;
        }
        const finalizePurchase = await Swal.fire({
            title: "Compra finalizada",
            text: "Gracias por confiar en nosotros",
            icon: "success",
            timer: 3000
        })
        navigate('/');
        clearCart();
    }

    return(
        <div className="cartContainer">
        <div className="cart">
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <h5>Tu carrito aún está vacío</h5>
             ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Producto seleccionado</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                </thead>
                <tbody>
                {cart.map((product) => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.count}</td>
                        <td>{product.price}</td>
                        <td>{product.count * product.price}</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onClick={() => removeFromCart(product.id)}>
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg></td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td className="total">Total:</td>
                    <td className="total">{total}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <button className="btn btn-primary total-btn" onClick={finalizePurchase}>Comprar</button>
                </tr>
                </tbody>
                </table>
            )}   
        </div>
        <ToastContainer/>
        </div>
    )
}