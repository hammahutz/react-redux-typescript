import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer.ts";

const reducers = combineReducers({
  bank: bankReducer,
});

export { reducers };
export type State = ReturnType<typeof reducers>;
