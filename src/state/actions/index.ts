import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.Deposit;
  payload: number;
}
interface WithdrawAction {
  type: ActionType.Withdraw;
  payload: number;
}
interface BankruptAction {
  type: ActionType.Bankrupt;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
