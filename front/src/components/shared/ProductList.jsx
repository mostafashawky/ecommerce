import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
const ListProducts = ({ productListData, listTitle }) => {
	return (
		<Container>
			<div className="list-wrapper mtc-5">
				<h3 className="main-heading text-center">{listTitle}</h3>
				<Row>
					{productListData.map((product) => (
						<Col xs={12} sm={6} md={3} key={product.id}>
							<ProductCard product={product} />
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default ListProducts;
