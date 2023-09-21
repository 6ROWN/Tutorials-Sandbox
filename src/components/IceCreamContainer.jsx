import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamReducer } from "../redux/reducers/iceCreamReducer";
import { buyIceCream } from "../redux/actions/iceCreamAction";

const IceCreamContainer = () => {
	const iceCream = useSelector(
		(state) => state.iceCreamReducer.numOfIceCreams
	);
	const dispatch = useDispatch();

	return (
		<div>
			<div>IceCreamContainer</div>
			<h3>Number of Icecreams - {iceCream}</h3>
			<button onClick={() => dispatch(buyIceCream())}>buyIcecream</button>
		</div>
	);
};

export default IceCreamContainer;
