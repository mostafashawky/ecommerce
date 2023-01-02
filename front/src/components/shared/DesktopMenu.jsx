import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const DesktopMenu = () => {
	return (
		<div className="desktop-menu">
			<Container>
				<ul className="list-unstyled d-flex list">
					<li className="item">
						<Link to="/">الصفحة الرئيسية</Link>
					</li>
					<li className="item">
						<Link to="/">الاقسام</Link>
					</li>
					<li className="item">
						<Link to="/">المتجر</Link>
					</li>
					<li className="item">
						<Link to="/">من نحن</Link>
					</li>
					<li className="item">
						<Link to="/">التواصل معنا</Link>
					</li>
				</ul>
			</Container>
		</div>
	);
};
export default DesktopMenu;
