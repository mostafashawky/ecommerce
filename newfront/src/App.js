import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
import "./sass/typo.scss";
function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}

export default App;
