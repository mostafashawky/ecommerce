import React from "react";
import * as HomepageComponent from "./components";
import * as layout from "../../components/layout";

const HomePage = () => {
	return (
		<div className="app">
			<layout.Header />
			<HomepageComponent.TopSlider />
		</div>
	);
};

export default HomePage;
