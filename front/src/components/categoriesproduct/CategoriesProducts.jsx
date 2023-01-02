import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { categoryproductsApi } from '../../api/categories'

const CategoriesProduct = () => {
    const [categoryProducts, setCategoryProducts] = useState({})
    const { category } = useParams('category')

    useEffect(() => {
        categoryproductsApi(category).then((response) => {
            setCategoryProducts(response.data)
        }).catch((error) => {

        })
    }, [])

    return (
        <div className="categories-products">
            <Container>
                <h2 className="heading heading-style" style={{ marginBottom: '20px' }}>{category.category}</h2>
                {categoryProducts.products?.length ?
                    (<Row>
                        {categoryProducts.products?.map((product) => (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className={`text-center product-card ${product.price_discount && 'offer'}`}>
                                    <Card.Img className="img img-fluid" variant="top" src={product.images[0].url} />
                                    <Card.Body>
                                        <Card.Title className="product-name">{product.product_name}</Card.Title>
                                        <p className={`${product.price_discount ? 'line-through' : ''} product-price`}>{product.price}$</p>
                                        {product.price_discount ? <p className="price-discount">{product.price_discount}$</p> : ''}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>) :
                    <h1>Sorry no products</h1>
                }


            </Container>
        </div>
    )
}
export default CategoriesProduct;