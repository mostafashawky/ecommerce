import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CartContext } from '../../App'
import CartItem from './CartItem'
const CartList = () => {
    const { carts } = useContext(CartContext)
    return (
        <div className="cart-details-box">
            <h3 className="cart-title">Shopping Carts</h3>
            <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                {carts.map((cart) => (
                    <CartItem key={cart.id} cart={cart} />
                ))}
            </div>
        </div>

    )

}
export default CartList