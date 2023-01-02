import React from "react";
import * as HomepageComponent from "./components";
import * as Layout from "../../layout";

const HomePage = () => {
	return (
		<>
			<Layout.Header />
			<HomepageComponent.TopSlider />
		</>
	);
};

export default HomePage;
