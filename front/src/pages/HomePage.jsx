import React, { useEffect, useState } from "react";
import {
	HomeTopSlider,
	Categories,
	BestOffers,
	NewArrival,
} from "../components/home";
import { ProductList } from "../components/shared";
import { categoriesApi } from "../api/categories";
import { randomproductApi, offersApi } from "../api/products";

const HomePage = () => {
	const [categories, setCategories] = useState([]);
	const [featureProduct, setFeatrueProduct] = useState([]);
	const [offersProduct, setOfferProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const [categoriesData, featureproductData, offersData] =
				await Promise.all([categoriesApi(), randomproductApi(), offersApi()]);

			setCategories(categoriesData.data);
			setFeatrueProduct(featureproductData.data);
			setOfferProduct(offersData.data);
			setLoading(false);
		})();
	}, []);
	// if (loading) return '...Loading'

	return (
		<>
			<HomeTopSlider />
			{categories && <Categories categories={categories} />}
			<BestOffers />
			<ProductList
				productListData={featureProduct}
				listTitle="المنتجات المميزة"
			/>
			<ProductList
				productListData={featureProduct}
				listTitle="Awesome Products"
			/>
			{/* <ProductList productListData={featureProduct} listTitle="Best Seller" />

			<ProductList productListData={offersProduct} listTitle="Our Offers" /> */}

			{/* <NewArrival /> */}
		</>
	);
};
export default HomePage;
