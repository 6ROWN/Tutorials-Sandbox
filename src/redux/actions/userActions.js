import {
	FETCH_USER_FAILURE,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
} from "../types/userTypes";

export const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST,
	};
};

export const fetchUserSuccess = (users) => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: users,
	};
};

export const fetchUserFailure = (error) => {
	return {
		type: FETCH_USER_FAILURE,
		payload: error,
	};
};

// export const fetchUsers = () => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(fetchUserRequest);
// 			const response = fetch(
// 				"https://jsonplaceholder.typicode.com/users"
// 			);
// 			const result = response.json();
// 			dispatch(fetchUserSuccess(result.results));
// 		} catch (error) {
// 			const errorMsg = error.message;
// 			dispatch(fetchUserFailure(errorMsg));
// 		}
// 	};
// };

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			// Dispatch a loading action when data fetching starts
			dispatch(fetchUserRequest());

			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const result = await response.json();

			// Dispatch a success action with the fetched data
			dispatch(fetchUserSuccess(result));
		} catch (error) {
			const errorMsg = error.message;
			// Dispatch a failure action if there's an error
			dispatch(fetchUserFailure(errorMsg));
		}
	};
};
