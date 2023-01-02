import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="address">
                            <h4 className="address-title">Office Address</h4>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore.</p>
                        </div>
                        <div className="social-link">
                            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
                            <Link to=""><i className="fa-brands fa-twitter"></i></Link>
                            <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} md={2}>
                        <div className="contact">
                            <h4 className="contact-title">the company</h4>
                            <ul className="list-unstyled">
                                <li className="item">
                                    <Link to="">About us</Link>
                                </li>
                                <li className="item">
                                    <Link to="">Company Profile</Link>
                                </li>
                                <li className="item">
                                    <Link to="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} md={3}>
                        <div className="more-info">
                            <h4 className="more-info-title">more info</h4>
                            <ul className="list-unstyled m-0">
                                <li className="item">
                                    <Link to="">How to Purchase</Link>
                                </li>
                                <li className="item">
                                    <Link to="">Privacy policiy</Link>
                                </li>
                                <li className="item">
                                    <Link to="">Refund Policiy</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={3}>
                        <div className="app">
                            <h4 className="app-title">Download apps</h4>
                            <button className="app-btn google-play">
                                <i className="fa-brands fa-google-play icon"></i>
                                <a className="get-app">GET IT ON<br /><span>Google Play</span></a>
                            </button>
                            <button className="app-btn google-play">
                                <i className="fa-brands fa-apple icon"></i>
                                <a className="get-app">GET IT ON<br /><span>App store</span></a>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copy-right text-center">
                &copy; Copyright 2022 by <span style={{ color: 'rgb(255 5 5)' }}>Mostafa Shawky</span> ,All Right Reserved
            </div>
        </footer>
    )
}

export default Footer
