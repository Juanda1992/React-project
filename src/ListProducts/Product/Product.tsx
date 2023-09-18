import { Button, Card } from "react-bootstrap";
import { ProductItem } from "../../types/typeApp";
import Prod from "./prod";
import React, { useContext } from "react";
// import { ShopContext } from '../../components/shopcontext'
// import ReactStars from "react-rating-stars-component";
// import { Link } from 'react-router-dom';
// import { CgComponents } from 'react-icons/cg';

type Props = {
  product: ProductItem;
  handleAddToCart: (product: ProductItem) => void;
};

const Product = ({ product, handleAddToCart }: Props) => {
  return (
    <div key={product.id} className="card">
      <img
        className="card-img-top-custom"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{product.title}</h5>
        <p className="card-text text-danger text-center mb-4 mt-4">
          Price:{product.price}
        </p>
        <Prod key={product.id} data={product} />
      </div>
    </div>
  );
};

export default Product;
