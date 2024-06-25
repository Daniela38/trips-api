import { createContext, useState } from "react";


const cartContext = createContext({cart: []});
const Provider = cartContext.Provider;

function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const newCart = [...cart];

    function isItemInCart(id) {
        return cart.some((itemInCart) => itemInCart.id === id);
    }

    function addItem(product, countFromCounter) {
        if(isItemInCart(product.id)) {
            const itemIndex = cart.findIndex((item) => item.id === product.id);
            newCart[itemIndex].count += countFromCounter;
        } else {
            newCart.push({...product, count: countFromCounter});
        }
        setCart(newCart);
    }

    return(
        <Provider value={{cart: cart, isItemInCart, addItem}}>
            {props.children}
        </Provider>
    )
}
export {cartContext, CartProvider};