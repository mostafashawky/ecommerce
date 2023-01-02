import React, { useContext } from 'react'
import { ProductQuantity } from '../shared'
import { Row, Col } from 'react-bootstrap'
import { CartContext } from '../../App'
const CartItem = ({ cart }) => {
    // global props which have global state update so can rerender app
    const { increaseProduct, decreaseProduct, deleteCart } = useContext(CartContext)

    const handleIncreaseQuantity = () => {

        increaseProduct(cart.product_id, cart.user_id)
    }
    const handleDecreaseQuantity = () => {
        decreaseProduct(cart.product_id, cart.user_id)
    }

    const handleDeleteCart = () => {
        let confirm = window.confirm('Are you sure you want to delete Cart ?!')
        if (confirm) {
            deleteCart(cart.id)
        }
    }
    console.log(cart)
    return (
        <Row className="d-flex align-items-start cart-details-body">
            <Col xs={2} md={3}>
                <div className="product-img">
                    <img className="img-fluid img" src={cart.product?.image} alt="product-img" />
                </div>
            </Col>
            <Col xs={9} sm={5} md={4}>
                <div className="product-details">
                    <h4 className="title">{cart.product?.product_name}</h4>
                    <p className="price">5000 EGB</p>
                </div>
            </Col>
            <Col sm={4} md={5} className="d-flex">
                <div className="quantity-wrapper">
                    <ProductQuantity
                        currentQuantity={cart.quantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                    />
                </div>
                <div className="total-price">{cart.total_price}</div>
                <button className="remove-product" onClick={handleDeleteCart}>
                    <i className='fa fa-trash'></i>
                </button>
            </Col>

        </Row >
    )
}
export default CartItem