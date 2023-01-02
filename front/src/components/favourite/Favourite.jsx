import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Favourite = () => {
    return (
        <div className="favourite-wrapper">
            <Container fluid>
                <h2 className="heading heading-style text-center" style={{ textTransform: 'uppercase' }}>
                    My favourite items
                </h2>
                <h3 className="subtitle text-center">Some of Our Exclusive Collection,You May Like</h3>
                <Row>
                    <Col xs={12} md={3}>
                        <Card style={{ border: 'none' }} className="text-center">
                            <Card.Img className="img-fluid img" variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/42/video_games_internet/video_game/xcm_banners_sd21_mena_4col_750x375_alpine_asinonly-rupmn-1ynyy-6yk81_440x300_eg-ar.jpg" />
                            <Card.Body>
                                <Card.Title className="product-name">Mobile Iphone</Card.Title>
                                <p className="product-price">250</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={{ border: 'none' }} className="text-center">
                            <Card.Img className="img-fluid img" variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/42/video_games_internet/video_game/xcm_banners_sd21_mena_4col_750x375_alpine_asinonly-rupmn-1ynyy-6yk81_440x300_eg-ar.jpg" />
                            <Card.Body>
                                <Card.Title className="product-name">Mobile Iphone</Card.Title>
                                <p className="product-price">250</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={{ border: 'none' }} className="text-center">
                            <Card.Img className="img-fluid img" variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/42/video_games_internet/video_game/xcm_banners_sd21_mena_4col_750x375_alpine_asinonly-rupmn-1ynyy-6yk81_440x300_eg-ar.jpg" />
                            <Card.Body>
                                <Card.Title className="product-name">Mobile Iphone</Card.Title>
                                <p className="product-price">250</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={{ border: 'none' }} className="text-center">
                            <Card.Img className="img-fluid img" variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/42/video_games_internet/video_game/xcm_banners_sd21_mena_4col_750x375_alpine_asinonly-rupmn-1ynyy-6yk81_440x300_eg-ar.jpg" />
                            <Card.Body>
                                <Card.Title className="product-name">Mobile Iphone</Card.Title>
                                <p className="product-price">250</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Favourite