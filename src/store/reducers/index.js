import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const allReducers = combineReducers({
  contactReducer,
});

export default allReducers;
