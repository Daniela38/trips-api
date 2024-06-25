import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import productsData from "./data";
import { useParams } from "react-router-dom";
import { getFlightsByCategory } from "../api";

function getItems() {
    const products = productsData;
    return products;
}

/*function getItemByCategory(categoryUrl) {
    const products = productsData;
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const filter = products.filter((product) => product.category === categoryUrl);
            resolve(filter)
        }, 1000);
    })
    return promise;
}*/

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const {categoryUrl} = useParams();

    useEffect(() => {
      const fetchFlights = async() => {
        const flights = await getFlightsByCategory(categoryUrl);
        setProducts(flights);
      }
      fetchFlights();  
    }, [categoryUrl]);

    /*useEffect(() => {
        if(categoryUrl === undefined) {
            const products = getItems();
                setProducts(products);
        } else {
            getItemByCategory(categoryUrl).then((respond) => {
                setProducts(respond);
            })
        }
    }, [categoryUrl]);*/
        
    return(
        <ItemList products={products}/>
    )
}