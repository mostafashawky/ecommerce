import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../App'
const CartDetails = ({ children }) => {

    const { carts } = useContext(CartContext)
    let totalSum = 0
    for (const cart of carts) {
        totalSum += cart.total_price
    }

    return (
        <div className="cart-details-wrapper">
            <h3 className="title">Shopping Details</h3>
            <ul className="list-unstyled list-details">
                <li className="item">Product Count: {carts.length}</li>
                <li className="item">Total Price: {totalSum}</li>
            </ul>
            {children}
        </div>
    )
}



export default CartDetails