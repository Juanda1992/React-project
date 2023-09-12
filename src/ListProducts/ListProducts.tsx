import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import useFetch from '../hooks/useFetch';
import { ProductItem } from '../types/typeApp';
import Product from './Product/Product';
const ListProducts = () => {

    const { dispatch } = useContext(CartContext);

    const { products, isLoading } = useFetch();
    

    const handleAddToCart = (product: ProductItem) => {
        dispatch({
            payload: product,
            type: 'ADD'
        });
    }

    if(isLoading) return <h1>Cargando...</h1>

    return (
        <>
      <section className="featured-products p-5">
        <div className="container-xxl">
         
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" >
     
            {
                products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            }
             </div>    
        </div>
    </section>
        </>
    )
}

export default ListProducts;
