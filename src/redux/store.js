import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fieldDraw from "./reducers";

const store = createStore(fieldDraw, composeWithDevTools(applyMiddleware(thunk)));
export default store;
