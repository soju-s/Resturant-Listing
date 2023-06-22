import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { resturantReducer } from "./reducers/allResturantReducers";


const reducer = combineReducers({
    resturantReducer
});

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

export default store;
