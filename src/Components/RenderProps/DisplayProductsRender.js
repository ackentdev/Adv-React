import React from 'react';
// /api/products

function DisplayProductsRender(props){
    console.log(props);
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

export default DisplayProductsRender;