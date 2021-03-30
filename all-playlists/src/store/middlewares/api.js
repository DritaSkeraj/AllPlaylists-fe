/**
 * Refresh auth logic makes another call if it see 401
 *
 */

import axios from "axios";
import * as actions from "../api";
import createAuthRefreshInterceptor from "axios-auth-refresh";
const { REACT_APP_BE_URL } = process.env;

// 🐤 REFRESH INTERCEPTOR
const refreshAuthLogic = (failedRequest) =>
	axios({
		url: `${REACT_APP_BE_URL}/auth/refreshToken`,
		withCredentials: true,
		method: "get",
	}).then((tokenRefreshResponse) => {
		return Promise.resolve();
	});

createAuthRefreshInterceptor(axios, refreshAuthLogic);

// 🚀 MIDDLEWARE
const api = ({ dispatch }) => (next) => async (action) => {
	if (action.type !== actions.apiCall.type) {
		//if action is not for api call,go to the next step
		return next(action);
	}

	const {
		url,
		headers,
		method,
		data,
		onSuccess,
		onStart,
		onError,
	} = action.payload;

	//"onStart" represents loading and makes it true,
	//"onSuccess" action makes it false
	if (onStart) dispatch({ type: onStart });
	//next(action); //we can also delete this. It's for seeing the 'api' action details
	try {
		const response = await axios({
			url,
			method,
			data,
			headers,
			withCredentials: true,
		});
		//saving tokens in the local store
		if(response.data.token){
			console.log("tokens are set")
			localStorage.setItem("accessToken",response.data.token)
			localStorage.setItem("refreshToken",response.data.refreshToken)
		}
		//General
		dispatch(actions.apiCallSuccess(response.data));
		//Spesific
		
		if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
		
	} catch (error) {
		console.log("errorr is: ", error.response.data);
		//General error action
		const errorMessage = error.response.data.errors;
		dispatch(actions.apiCallFailed(errorMessage));

		//Spesific error action
		if (onError) dispatch({ type: onError, payload: errorMessage });
	}
};

export default api;
