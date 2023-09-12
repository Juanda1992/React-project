/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "../../components/shopcontext";
import { Link } from "react-router-dom";

const prod = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="col mb-5">
        <div className="mb-3">
          <Link to="/details" onClick={() => viewProductDetails(id)}>
            <p className="text-center">
              <button className="fs-4" id="clear-cart">
                View Details
              </button>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default prod;
