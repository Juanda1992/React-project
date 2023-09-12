import { Button, Card } from 'react-bootstrap';
import { ProductItem } from '../../types/typeApp';
import Prod from './prod'
import React, { useContext} from 'react'
// import { ShopContext } from '../../components/shopcontext'
// import ReactStars from "react-rating-stars-component";
// import { Link } from 'react-router-dom';
// import { CgComponents } from 'react-icons/cg';

type Props = {
    product: ProductItem;
    handleAddToCart: (product: ProductItem) => void;
}

const Product = ({product, handleAddToCart}: Props) => {
    return (
        
         <Card className="classCardName" >
            <Card.Img variant="top"  src={product.image} className='card-img'/>
            <Card.Body> 
                <Card.Title className='card-title'>{product.title}</Card.Title>
                <Card.Text  > ${product.price}</Card.Text>  
                <Prod key={product.id} data={product} />

            </Card.Body>
        </Card>

        

        
    );
}

export default Product;
