import React from "react"
import { ProductCard } from "../product-card/product-card.component"
import "./product-list.styles.css"


export const ProductListComponent = props => {
    return(
        <div className="product-list">
            {props.productList.map(product => <ProductCard key={product.id} product= {product} />)}
        </div>
    )
}