import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import './cartContainer.css';

export default function CartContainer() {
    const {cart} = useContext(cartContext);

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
                </table>
            )}   
        </div>
        </div>
    )
}