import React, { useState } from "react";
import MyButton from "../MyButton";
import './itemCount.css';

export default function ItemCount(props) {

    const [count, setCount] = useState(1);

    function handleAdd() {
        setCount(count + 1);
    }

    function handleSubstract() {
        if(count > 1) {
            setCount(count - 1);
        }
    }

    return(
        <div>
            <div className="count">
                <MyButton onPress = {handleSubstract} > - </MyButton>
                <span> {count} </span>
                <MyButton onPress = {handleAdd} > + </MyButton>
            </div>
            <div className="add">
                <MyButton onPress={() => props.onAddToCart(count)}>Agregar al carrito</MyButton>
            </div>
        </div>
    )
}
