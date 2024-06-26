import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import './cartContainer.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CartContainer() {
    
    const {cart, clearCart} = useContext(cartContext);

    const navigate = useNavigate();

    let total = 0;
    cart.forEach((product) => {
        total += product.count * product.price;
    });

    async function finalizePurchase () {
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
                <tr>
                    <th>Producto seleccionado</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Subtotal</th>
                </tr>
                {cart.map((product) => (
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.count}</td>
                        <td>{product.price}</td>
                        <td>{product.count * product.price}</td>
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
                </table>
            )}   
        </div>
        </div>
    )
}