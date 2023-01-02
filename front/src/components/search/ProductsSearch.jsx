import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { searchproductApi } from '../../api/products';

const ProductsSearch = () => {
    const [searchProducts, setSearchProducts] = useState([])
    const queryProduct = new URLSearchParams(window.location.search)

    useEffect(() => {
        searchproductApi(queryProduct.get('key')).then((response) => {
            setSearchProducts(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [queryProduct])

    return (
        <div className="search-products">
            <Container>
                <h2 className="heading heading-style text-center">
                    Search Product
                </h2>
                {searchProducts.length ? (
                    <Row >
                        {searchProducts.map((product) => (
                            <Col xs={12} sm={4} lg={2} key={product.id}>
                                <Card className="text-center product-card">
                                    <Card.Img className="img img-fluid" variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title className="product-name">{product.product_name}</Card.Title>
                                        <p className={`${product.price_discount ? 'line-through' : ''} product-price`}>{product.price}$</p>
                                        {product.price_discount ? <p className="price-discount">{product.price_discount}$</p> : ''}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : ""}
            </Container>
        </div>
    )
}
export default ProductsSearch;