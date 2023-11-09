import { BrowserRouter } from "react-router-dom";

import RouterView from "./router";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<RouterView />
			</BrowserRouter>
		</div>
	);
}

export default App;
