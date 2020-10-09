import React from 'react'
import './Checkout.css'
import Product from './Product';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="left">
                <div className="banner">
                    <div className="text">
                        <h3>Earn 3% Back on Amazon.com purchases</h3>
                        <p>When you use Amazon Rewards Visa Card at checkout</p>
                    </div>
                </div>

                <h3>Hello{user ?`, ${user.email}`: null}</h3>
                <h3 style={{marginBottom:'40px'}}>Shopping Cart</h3>
                {basket.map(item => (
                    <div className="row">
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    </div>
                ) )}
            </div>
            <div className="right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
