import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import subCategoriesApi from '../../api/subcategories'
const SubCategories = ({ category }) => {
    const [subCategories, setSubCategories] = useState([])
    useEffect(() => {
        subCategoriesApi(category.category).then((response) => {
            setSubCategories(response.data)
        }).catch((error) => {

        })
    }, [])
    return (
        <div className="subcategories">
            <Container>
                <h2 className="heading heading-style text-center" style={{ marginBottom: '15px' }}>
                    {category.category}
                </h2>
                {subCategories.length ? (
                    <Row>
                        {subCategories.map((subcat) => (
                            <Col xs={12} sm={4} key={subcat.id}>
                                <Card style={{ border: 'none' }} className="text-center">
                                    <Card.Img className="img-fluid img" variant="top" src={subcat.image} />
                                    <Card.Body>
                                        <Card.Title className="product-name">{subcat.cat_name}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                ) : <div>no data to show</div>}
            </Container >
        </div >
    )
}
export default SubCategories;