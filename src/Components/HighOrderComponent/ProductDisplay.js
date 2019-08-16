import React from 'react';
import '../../App.scss'
import myHOC from './HOC';
// /api/products

function ProductDisplay(props){
    console.log('Props within product display HOC', props)
    const displayProducts = props.data.map((product, i) => {
        return( 
            <div
            key={i}
            className="display-container">
                <img 
                src={product.image}
                alt="products"
                />
            <b>{product.price}</b>
            <h1>{product.name}</h1>
        </div>
        )
    })
    return (
        <div>
            {displayProducts}
        </div>
    )
}

export default myHOC(ProductDisplay, "/api/products");