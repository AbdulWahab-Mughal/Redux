//WHat is Action?
//Action is a JavaScript Plain object that represents an action to be performed by the Redux store. It has two properties: type and payload.
//Action is a JavaScript Plain object that represents an action performed by the user. It contains information about what kind of action was taken
//What is Action Creator?
//Action Creator is a function which returns an Action

const incrementCounter = () => {
    // console.log("Increment Calling");
  return {
    type: "INCREMENT_COUNTER",
  };
};
const decrementCounter = () => {
    // console.log("decrement Calling");
  return {
    type: "DECREMENT_COUNTER",
  };
};
const resetCounter = () => {
    // console.log("reset Calling");
  return {
    type: "RESET_COUNTER",
  };
};

export { incrementCounter,decrementCounter,resetCounter };
