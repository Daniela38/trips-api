import { createContext, useEffect, useState } from "react";

const appContext = createContext();
const Provider = appContext.Provider;

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

function AppProvider(props) {

    const [cart, setCart] = useState(savedCart);
    const [user, setUser] = useState(null);

    /*useEffect(() => {
        console.log("Loading cart from localStorage");
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);*/

    useEffect(() => {
        console.log("Saving cart to localStorage", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function isItemInCart(id) {
        return cart.some((itemInCart) => itemInCart.id === id);
    }

    function addItem(product, countFromCounter) {
        const newCart = [...cart];
        if(isItemInCart(product.id)) {
            const itemIndex = cart.findIndex((item) => item.id === product.id);
            newCart[itemIndex].count += countFromCounter;
        } else {
            newCart.push({...product, count: countFromCounter});
        }
        setCart(newCart);
    }

    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
        console.log(cart);
        return cart;
    }

    function clearCart() {
        setCart([]);
        localStorage.removeItem("cart");
    }

    return(
        <Provider value={{cart: cart, isItemInCart, addItem, removeFromCart, clearCart, user, setUser}}>
            {props.children}
        </Provider>
    )
}
export {appContext, AppProvider};