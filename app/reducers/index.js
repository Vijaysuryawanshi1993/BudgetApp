import { combineReducers } from "redux";
import persistedReducer from "./PersistedReducer";


const rootReducer = combineReducers({
  persistedReducer
});

export default rootReducer;