import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCall } from "./api";

const initialState = {
	data: {},
	playlists: [],
	isLoggedIn: false,
	errorMessage: "",
	loading: false,
};

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
		}),
		loginSuccess: (state, action) => ({
			...state,
			loading: false,
			isLoggedIn: true,
			data: action.payload,
		}),
		logoutSuccess: (state, action) => ({
			...state,
			loading: false,
			isLoggedIn: false,
			data: {},
		}),
		failed: (state, action) => ({
			...state,
			loading: false,
			errorMessage: action.payload,
		}),
	},
});

export const { requested, loginSuccess, logoutSuccess, failed } = slice.actions;

export default slice.reducer;

export const getUserProfile = () =>
	apiCall({
		url: `https://cors-anywhere-ds.herokuapp.com/${process.env.REACT_APP_BE_URL}/users/me`,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});

export const getUserPlaylists = () =>
	apiCall({
		url: `https://cors-anywhere-ds.herokuapp.com/${process.env.REACT_APP_BE_URL}/playlists`,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});

export const logout = () =>
	apiCall({
		url: `https://cors-anywhere-ds.herokuapp.com/${process.env.REACT_APP_BE_URL}/auth/logout`,
		onStart: requested.type,
		onSuccess: logoutSuccess.type,
		onError: failed.type,
	});

export const login = (data) =>
	apiCall({
		url: `https://cors-anywhere-ds.herokuapp.com/${process.env.REACT_APP_BE_URL}/auth/login`,
		method: "post",
		data,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});

export const signup = (data) =>
	apiCall({
		url: `https://cors-anywhere-ds.herokuapp.com/${process.env.REACT_APP_BE_URL}/auth/signup`,
		method: "post",
		data,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});
