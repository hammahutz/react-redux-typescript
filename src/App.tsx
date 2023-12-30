import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator, State } from "./state";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreator,
    dispatch
  );

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </>
  );
};

export default App;
