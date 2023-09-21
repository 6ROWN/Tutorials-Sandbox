import { combineReducers } from "redux";
import cakeReducer from "../redux/reducers/cakeReducer";
import { iceCreamReducer } from "../redux/reducers/iceCreamReducer";
import { userReducer } from "../redux/reducers/userReducer";

export const rootReducer = combineReducers({
	cakeReducer,
	iceCreamReducer,
	userReducer,
});
