import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CartList } from '../components/cart'
import { CartDetails } from '../components/shared'
const CartPage = () => {
    const navigate = useNavigate()
    const handleNavigateUser = () => {
        navigate('/orders/checkout')
    }
    return (
        <div className="cart-wrapper">
            <Container fluid="md" className="cart-container">
                <Row>
                    <Col xs={12} lg={9}>
                        <CartList />
                    </Col>
                    <Col xs={12} lg={3}>
                        <CartDetails >
                            <Button size="sm" variant="dark" className="btn-checkout" onClick={handleNavigateUser}>Checkout</Button>
                        </CartDetails>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartPage