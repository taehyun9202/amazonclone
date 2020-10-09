import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, image, price, rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();
    const deleteFromBasket = () => {
        dispatch({
            type: "DELETE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <div className="productInfo">
                <img src={image} />
                <div className="checkoutProductDetail">
                    <strong className="productTitle">{title}</strong>
                    <p className="productQuantity">{rating}</p>
                </div>
                <div className="right">
                    <strong className="productTitle">{price}</strong>
                    {!hideButton && (
                        <a onClick={deleteFromBasket} className="deleteProduct">Delete</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct