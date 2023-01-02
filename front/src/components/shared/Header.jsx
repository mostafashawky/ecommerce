import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { useAuth } from "../../utils";
import { CartContext } from "../../App";

const NavbarDesktop = () => {
	const [searchKey, setSearchKey] = useState("");
	const { carts } = useContext(CartContext);
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleSearchProduct = () => {
		let key = searchKey.trim();
		if (key.length > 3) {
			navigate(`/search?key=${key}`);
		}
	};

	return (
		<div className="nav">
			<Container>
				<Row
					className="align-items-center"
					style={{ flexDirection: "row-reverse" }}
				>
					<Col xs={12} md={2}>
						<div className="logo text-center text-md-start">
							<Link to="/">NotifyShop</Link>
						</div>
					</Col>
					<Col xs={12} md={7}>
						<div className="search-input">
							<input
								type="text"
								className="form-control search"
								placeholder="ماذا تبحث؟"
							/>
							<button class="btn-search">
								<i className="icon fa fa-search"></i>
							</button>
						</div>
					</Col>
					<Col xs={12} md={3}>
						<div className="user-action">
							<div className="wrapper" style={{ position: "relative" }}>
								<Link to="/">
									<i className="fa fa-heart"></i>
								</Link>
								<span className="count">5</span>
							</div>
							<div className="wrapper" style={{ position: "relative" }}>
								<Link to="/">
									<i className="fa fa-shopping-bag"></i>
								</Link>
								<span className="count">5</span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default NavbarDesktop;
