import {applyMiddleware, combineReducers, createStore} from "redux";
import teamReducer from "./reducers/team-reducer";
import projectReducer from "./reducers/project-reducer";
import thunk from "redux-thunk";

let reducerPack = combineReducers({
    projectReducer,
    teamReducer,
});

let store = createStore(reducerPack,applyMiddleware(thunk));

export default store
