import React from "react";
import { Container } from "react-bootstrap";
import image from "../../assets/images/img1.jpg";
const BestOffers = () => {
	return (
		<Container className="mtc-5">
			<div className="image-wrapper">
				<img className="img-fluid" src={image} alt="image-offer" />
			</div>
		</Container>
	);
};
export default BestOffers;
