import React from "react";
import Item from "../Item/Item";
import './itemList.css';

export default function ItemList(props) {

    return(
        <div className="style-itemList">
            {props.products.map((product) => (
                <Item
                    id={product._id}
                    img={product.img}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    )
}