import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/dist/fontawesome.css";
// import "react-toastify/dist/ReactToastify.css";
import "./assets/css/dist/main.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}

export default App;
