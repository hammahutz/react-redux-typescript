import { ActionType } from "../action-types";
import { Action } from "../actions";

const initalState = 0;

const bankReducer = (state: number = initalState, action: Action) => {
  switch (action.type) {
    case ActionType.Deposit:
      return state + action.payload;
    case ActionType.Withdraw:
      return state - action.payload;
    case ActionType.Bankrupt:
      return 0;
    default:
      return state;
  }
};

export { bankReducer };
