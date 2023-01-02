import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import Slider from "react-slick";
import { newArrivalApi } from '../../api/products';
import { ProductCard } from '../shared'
const NewArrival = () => {
    const [newArrival, setNewArrival] = useState([])
    const slider = useRef(null)
    useEffect(() => {
        newArrivalApi().then((response) => {
            setNewArrival(response.data)
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplayspeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const handlePrev = () => {
        slider.current.slickPrev()
    }
    const handleNext = () => {
        slider.current.slickNext()
    }
    return (
        <section className="new-arrival">
            <Container fluid >
                <header>
                    <h2 className="heading heading-style text-center">
                        New Arrival
                        <a className="arrow left" onClick={handlePrev}><i className="fa fa-angle-left"></i></a>
                        <a className="arrow right" onClick={handleNext}><i className="fa fa-angle-right"></i></a>
                    </h2>
                </header>
                <Slider {...settings} ref={slider}>
                    {newArrival.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </Slider>
            </Container>
        </section>
    )
}
export default NewArrival