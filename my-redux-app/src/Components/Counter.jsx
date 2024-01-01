import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../Store/Actions/CounterAction";

const Counter = () => {
  //useDispatch is used for trigerred actions
  const dispatch = useDispatch();

  //useSelector is used to Display the action on the state or UI
  const { counter } = useSelector((state) => state);
  const addCounterHandler = () => {
    dispatch(incrementCounter());
  };
  const subCounterHandler = () => {
    dispatch(decrementCounter());
  };
  const resetCounterHandler = () => {
    dispatch(resetCounter());
  };
  return (
    <section className="Main">
      <h1>Counter App</h1>
      <div className="container">
        <div className="btnPlus">
          <button onClick={addCounterHandler}>+</button>
        </div>
        <div className="screen">
          <span>{counter}</span>
        </div>
        <div className="btnMinus">
          <button onClick={subCounterHandler}>-</button>
        </div>
        <div className="btnMinus">
          <button onClick={resetCounterHandler}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
