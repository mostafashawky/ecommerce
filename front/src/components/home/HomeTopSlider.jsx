import React from "react";
import Slider from "react-slick";
import FirstImage from "../../assets/images/slider/img1.jpg";
import SecondImage from "../../assets/images/slider/img2.jpg";
import ThirdImage from "../../assets/images/slider/img3.jpg";

const HomeTopSlider = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="slider">
			<Slider {...settings}>
				<div className="slider-image">
					<img className="img-fluid" src={FirstImage} alt="slider" />
				</div>
				<div className="slider-image">
					<img className="img-fluid" src={SecondImage} alt="slider" />
				</div>
				<div className="slider-image">
					<img className="img-fluid" src={ThirdImage} alt="slider" />
				</div>
			</Slider>
		</div>
	);
};
export default HomeTopSlider;
