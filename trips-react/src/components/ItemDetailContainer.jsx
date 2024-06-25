import React, { useContext, useEffect, useState } from "react";
import productsData from "./data";
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail/ItemDetail';
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "./context/CartContext";
import { getFlightById } from "../api";

function getSingleItem(id) {
    const products = productsData;
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const itemRequested = products.find((item) => {
                return(item.id === Number(id));
            })
            resolve(itemRequested);
        }, 1000);
    });
    return promise;    
} 

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const {categoryUrl} = useParams();
    const {addItem} = useContext(cartContext);

    useEffect(() => {
        const fetchFlight = async() => {
            const flight = await getFlightById(categoryUrl, id);
            setProduct(flight);
        }
        fetchFlight();
    }, [id]);

    /*useEffect(() => {
        getSingleItem(id).then((respond) => {
            setProduct(respond)
        })
    }, [id]);*/

    function handleAddToCart(count) {
        addItem(product, count);
        console.log("se aregaron" + count)
    }

    return (
        <div>
            <ItemDetail product = {product}>
                <ItemCount onAddToCart={handleAddToCart}/>
            </ItemDetail>
        </div>
    )
}