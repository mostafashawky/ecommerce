import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplayspeed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrow: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
		<section className="categories mtc-5">
			<Container fluid="md">
				<h3 className="main-heading style text-center">
					<span className="style">الاقسام المميزة</span>
				</h3>
				<Slider {...settings}>
					{categories.map((cat) => (
						<div className="wrapper text-center" key={cat.id}>
							<Link to={`/categories/${cat.id}`}>
								<div className="cat-card">
									<img className="img" src={cat.image} alt="category-image" />
									<p className="cat-name">{cat.cat_name}</p>
								</div>
							</Link>
						</div>
					))}
				</Slider>
			</Container>
		</section>
	);
};

export default Categories;
