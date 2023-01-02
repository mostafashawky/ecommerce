import React from 'react';
import { UserDetailsForm } from '../components/order'
import { CartDetails } from '../components/shared'
import { Container, Row, Col } from 'react-bootstrap'
const OrderPage = () => {

    return (
        <div className="order-wrapper">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <UserDetailsForm />
                    </Col>
                    <Col xs={12} md={3}>
                        <CartDetails />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default OrderPage;

