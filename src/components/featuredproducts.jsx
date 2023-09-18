/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const featuredproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET a la API para obtener los datos de productos
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
      {products.slice(0, 4).map((product) => (
        <div className="col mb-5">
          <div key={product.id} className="card h-100 m-auto">
            <img
              src={product.image}
              className="card-img-top img-fluid"
              alt="Product"
              style={{ height: '200px'}}
            />
            <div className="card-body mx-auto">
              <h5 className="cart-text mb-3">{product.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default featuredproducts;
