//What is differrence bt redux and redux ToolKit?
//Redux has immutable state...means u cannot update states directly...which means u have to define initial state in state parameter.....
//Redux Toolit has mutable state...means u can update states directly..which means u dont have to define initial state in state parameter it can automatically get that....

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_COUNTER = {
  counter: 0,
};

const CounterSlice = createSlice({
  name: "COUNTER SLICE",
  initialState: INITIAL_STATE_COUNTER,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
  },
});

const { increment, decrement, reset } = CounterSlice.actions;

//the method of changing the name like "reducer:CounterReducer" is called Alias method
const { reducer: CounterReducer } = CounterSlice;

export { increment, decrement, reset, CounterReducer };
