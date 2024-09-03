import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import searchResultAction from "../reducers/searchResult";

const allReducers = combineReducers({
    favourites: favouritesReducer,
    searchResult: searchResultAction
})

const store = configureStore({
    reducer: allReducers,
})

export default store
