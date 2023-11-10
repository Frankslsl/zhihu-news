import { BrowserRouter } from "react-router-dom";

import RouterView from "./router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/toolkit";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<RouterView />
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
