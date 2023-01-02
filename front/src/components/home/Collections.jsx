import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { remarkproductApi } from '../../api/products'
const Collections = () => {
    const [collectionProduct, setCollectionProduct] = useState([])
    useEffect(() => {
        remarkproductApi('featureproduct').then((response) => {
            setCollectionProduct(response.data)
        }).catch((error) => {

        })
    }, [])

    return (
        <section className="collection-products">
            <Container fluid>
                <h2 className="heading heading-style text-center">
                    Collections
                </h2>
                <h3 className="subtitle text-center">Some of Our Exclusive Collection,You May Like</h3>
                {collectionProduct.length ? (
                    <Row >
                        {collectionProduct.map((product) => (
                            <Col xs={12} sm={4} lg={3} key={product.id}>
                                <Card className="text-center product-card">
                                    <Card.Img className="img img-fluid" variant="top" src={product.image} />
                                    <Card.Body>
                                        <Link style={{ display: 'block' }} to={`/productdetails/${product.id}`}>
                                            <Card.Title className="product-name">{product.product_name}</Card.Title>
                                        </Link>
                                        <Link to={`/productdetails/${product.id}`} className="d-flex justify-content-center align-items-center">
                                            <p className={`${product.price_discount ? 'line-through' : ''} product-price`}>{product.price} EGB</p>
                                            {product.price_discount ? <p className="price-discount">{product.price_discount} EGB</p> : ''}
                                        </Link>
                                        <button className="add-cart-btn">
                                            <span className="text">Add to Cart</span>
                                            <i className="fa fa-cart-shopping"></i>
                                        </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : ""}
            </Container>
        </section >
    )
}
export default Collections