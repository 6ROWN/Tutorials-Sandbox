import React from "react";
import { buyCake } from "../redux/actions/cakeAction";
import { connect } from "react-redux";
const CakeContainer = (props) => {
	return (
		<div>
			<div>Number of cakes:{props.numOfCakes} </div>
			<button onClick={props.buyCake}>buy cake</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.cakeReducer.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
