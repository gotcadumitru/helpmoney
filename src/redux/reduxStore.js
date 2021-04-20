
import thunkMiddleware from "redux-thunk" 
import appReducer from "./app-reducer";
const { createStore, combineReducers, applyMiddleware,compose } = require("redux");


let reducers = combineReducers({
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
window.store=store;

//let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;