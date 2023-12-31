import { createStore, applyMiddleware } from "redux";
import cakeReducer from "../redux/reducers/cakeReducer";
import { rootReducer } from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
