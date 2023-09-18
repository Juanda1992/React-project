import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import useFetch from '../hooks/useFetch';
import Product from './Product/Product';

const ListProducts = () => {
  const { dispatch } = useContext(CartContext);
  const { products, isLoading } = useFetch();

  const handleAddToCart = (product) => {
    dispatch({
      payload: product,
      type: 'ADD',
    });
  };

  if (isLoading) return <h1 className='text-center mt-5'>Loading...</h1>;

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: 'center'}}> Products</h1>
        <p className="mb-4" style={{ textAlign: 'center'}}>All weather designs</p>
        <div className="card-deck">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
