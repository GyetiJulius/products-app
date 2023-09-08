import React from "react"
import './product-card.styles.css'

export const ProductCard = (props) => {
    return (
        <div className="product-card">
            <h1 className="h1-tag"> {props.product.title} </h1>
            <h3>{props.product.category}</h3>
        </div>
    )
}