import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/actions/cakeAction";

const HooksCakeContainer = () => {
	const numberOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<div>HooksCakeContainer</div>
			<h2> Num of Cakes:{numberOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>BUY CAKE </button>
		</div>
	);
};

export default HooksCakeContainer;
