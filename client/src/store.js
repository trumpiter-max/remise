import {  createStore } from "@reduxjs/toolkit";
import rootReducer from "./components/reducers";

export const store = createStore(rootReducer);
export default store;