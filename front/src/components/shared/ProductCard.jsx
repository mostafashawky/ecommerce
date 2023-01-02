import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CartContext } from "../../App";
import { ToastContainer } from "react-toastify";
const ProductCard = ({ product }) => {
	const cartsContext = useContext(CartContext);

	const handleAddCart = () => {
		const cartData = {
			product_id: product.id,
			size: product.size.split(",")[0],
			color: product.color.split(",")[0],
			quantity: 1,
			unit_price: product.price_discount || product.price,
			total_price: product.price_discount || product.price,
		};
		cartsContext.addCart(cartData);
	};

	const calcPercentage = (price, discount_price) => {
		let discountPercentage = Math.round((discount_price / price) * 100);
		return discountPercentage;
	};
	return (
		<Card className="text-center product-card">
			{product.price_discount && (
				<span className="offer-percentage">
					{calcPercentage(product.price, product.price_discount)}%
				</span>
			)}
			<header className="card-header">
				<Card.Img className="img img-fluid" variant="top" src={product.image} />
				<div className="user-action">
					<button className="btn-icon">
						<i className="fa-regular fa-heart"></i>
					</button>
					<button className="btn-icon">
						<i className="fa-regular fa-eye"></i>
					</button>
				</div>
			</header>
			<Card.Body>
				<Link style={{ display: "block" }} to={`/productdetails/${product.id}`}>
					<Card.Title className="product-name">
						{product.product_name}
					</Card.Title>
				</Link>
				<Link
					to={`/productdetails/${product.id}`}
					className="d-flex justify-content-center align-items-center"
				>
					{product.price_discount && (
						<p className="product-price">${product.price_discount}</p>
					)}
					<p
						className={`product-price ${product.price_discount ? "offer" : ""}`}
					>
						${product.price}
					</p>
				</Link>
				<button className="add-cart-btn" onClick={handleAddCart}>
					اضافة الي السلة
				</button>
			</Card.Body>
		</Card>
	);
};
export default ProductCard;
