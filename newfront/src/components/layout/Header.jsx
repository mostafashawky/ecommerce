import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
	return (
		<div className="header">
			<Container>
				<Row className="align-items-center">
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
export default Header;
