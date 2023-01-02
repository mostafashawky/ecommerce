import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/dist/fontawesome.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/dist/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	HomePage,
	AboutPage,
	LoginPage,
	ContactPage,
	ProductDetailsPage,
	NotificationPage,
	FavouritePage,
	CartPage,
	CategoriesProductsPage,
	SubCategoriesPage,
	SearchPage,
	RegisterPage,
	OrderPage,
} from "./pages";

import { Header, DesktopMenu, Footer } from "./components/shared";
import { useCart } from "./utils";

export const CartContext = React.createContext();
const App = () => {
	const {
		carts,
		addCart,
		increaseProduct,
		decreaseProduct,
		deleteCart,
		loading,
	} = useCart();

	// sharing props with component tree
	const cartsFun = {
		carts,
		addCart,
		loading,
		increaseProduct,
		decreaseProduct,
		deleteCart,
	};

	return (
		<>
			<CartContext.Provider value={cartsFun}>
				<Header />
				<DesktopMenu />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route
						path="/productdetails/:product"
						element={<ProductDetailsPage />}
					/>
					<Route path="/favourite" element={<FavouritePage />} />
					<Route path="/notificaion" element={<NotificationPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route
						path="/categories/:category/"
						element={<CategoriesProductsPage />}
					/>
					<Route
						path="/categories/:category/subcategories"
						element={<SubCategoriesPage />}
					/>
					<Route path="/search" element={<SearchPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/orders/checkout" element={<OrderPage />} />
				</Routes>
				{/* <Footer /> */}
			</CartContext.Provider>
		</>
	);
};

export default App;
