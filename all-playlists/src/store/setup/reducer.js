import { combineReducers } from "@reduxjs/toolkit";

import refreshReducer from "../refresh";
import userReducer from "../user";
import nowPlayingReducer from "../nowPlaying";

const rootReducer = combineReducers({
	user: userReducer,
	refresh: refreshReducer,
	nowPlaying: nowPlayingReducer
});

export default rootReducer;
