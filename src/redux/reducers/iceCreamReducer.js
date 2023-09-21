import { BUY_ICE_CREAM } from "../types/iceCream";

const initialState = {
	numOfIceCreams: 50,
};

export const iceCreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return {
				numOfIceCreams: state.numOfIceCreams - 1,
			};

		default:
			return state;
	}
};
