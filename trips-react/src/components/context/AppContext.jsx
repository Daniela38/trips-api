import { createContext, useState } from "react";

const appContext = createContext({cart: [], user: null});
const Provider = appContext.Provider;

function AppProvider(props) {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

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

    function clearCart() {
        setCart([]);
    }

    return(
        <Provider value={{cart: cart, isItemInCart, addItem, clearCart, user, setUser}}>
            {props.children}
        </Provider>
    )
}
export {appContext, AppProvider};