import React from "react";
import Slider from "react-slick";
import sliderConfig from "./sliderconfig";
import FirstImage from "../../../assets/images/slider/img1.jpg";
import SecondImage from "../../../assets/images/slider/img2.jpg";
import ThirdImage from "../../../assets/images/slider/img3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSlider = () => {
	return (
		<div className="slider">
			<Slider {...sliderConfig}>
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
export default TopSlider;
