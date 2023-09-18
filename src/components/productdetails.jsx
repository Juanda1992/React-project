/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./shopcontext";
import CartItem from "./cartitem"; // Importa el componente cartitem
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const {
    selectedProduct,
    closeProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0); // Estado para el precio actual
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

  const navigate = useNavigate();
  // Set selectedProduct to 0
  const productId = selectedProduct || 0;

  useEffect(() => {
    // Hacer una solicitud GET a la API para obtener los datos del producto
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, [productId]);

  if (!product) {
    return null;
  }
  const cartItemAmount = cartItems[product.id];

  // Función para actualizar el precio al agregar o quitar del carrito
  const updatePrice = (amount) => {
    const updatedPrice = (product.price * amount).toFixed(2);
    setCurrentPrice(updatedPrice);
  };

  // Función para agregar un producto al carrito
  const handleAddToCart = () => {
    addToCart(product.id);
    updatePrice(cartItemAmount + 1);
  };

  // Función para quitar un producto del carrito
  const handleRemoveFromCart = () => {
    if (cartItemAmount > 0) {
      removeToCart(product.id);
      updatePrice(cartItemAmount - 1);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-5 m-auto">
            <img
              src={product.image}
              alt=""
              className="card-img-top img-fluid p-2"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card p-3 m-auto">
            <div className="card-body card-body-details">
              <h5 className="card-title">{product.title}</h5>
              <h3 className="card-text">{product.name}</h3>
              <p className="card-text">
                <span className="text-danger fs-4 me-2">${currentPrice}</span>
              </p>
              <p className="card-text">{product.description}</p>
              <p className="card-text mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
                <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
                et sint facere reprehenderit?
              </p>

              <div className="d-flex align-items-center mb-3 col-12">
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  -
                </button>
                <input
                  className="form-control text-center"
                  value={cartItems[product.id]}
                  onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), product.id)
                  }
                />
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => handleAddToCart(product.id)}
                >
                  +
                </button>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  onClick={() => navigate("/cart")}
                  data-btn-action="add-btn-cart"
                  id="button-link"
                  className="myButton"
                >
                  {" "}
                  Add To Cart
                  {cartItemAmount > 0 && ` (${cartItemAmount})`}
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="d-flex justify-content-center">
              <h2 className="text-center mb-2">
                More products of the same category
              </h2>
            </div>

            <div className="d-none d-md-block">
              <div className="row mb-3">
                <div className="col-6 col-md-4 col-lg-8 mx-auto">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {/* Mapear y mostrar más productos de la misma categoría aquí */}
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="col">
                        <div className="card h-100">
                          {/* Aquí puedes acceder a los datos de productos de la API y mostrarlos */}
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
