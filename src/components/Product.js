import React from 'react'
import './Product.css'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }

    return (
        <div className="product">
            <div className="productInfo">
                <p className="name">{title}</p>
                <p className="price">Price: ${price}</p>
                <p>Rate: {rating}</p>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
