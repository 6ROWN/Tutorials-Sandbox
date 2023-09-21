import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./lib/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
	return (
		<Provider store={store}>
			<CakeContainer />
			<HooksCakeContainer />
			<IceCreamContainer />
			<UserContainer />
		</Provider>
	);
}

export default App;
