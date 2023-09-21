import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/actions/userActions";

const UserContainer = () => {
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return userData.loading ? (
		<div>Loading....</div>
	) : userData.error ? (
		<div>Error here: {userData.error}</div>
	) : (
		<div>
			<h1>List of users</h1>
			{userData.users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
};

export default UserContainer;
