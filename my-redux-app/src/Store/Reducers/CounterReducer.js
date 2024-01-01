// Redux have three Principles..
//1.hamari jo global states hai jo hum bnana chahta ha wo Objects ma hongi...
//2.agr apne state ko update krna ha ...tw ap directly nhi kr sakhta....apko kisi Action ko call krna pera ga
//3.Reducers hamesha Pure Functions honga.

//What is Reducers? a reducer is a JS Pure function that determines changes to an application's state. Reducers in Redux are responsible for updating the state when an action is dispatched.

// A reducer function takes in two parameters:
// The current state of the application.
// The action that was dispatched by the application.

//Creating State

const INITIAL_STATE = {
  counter: 0,
};

// Creating Reducer

const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
        // console.log( state.counter+1);
        return {
            counter: state.counter + 1,
        };
    case "DECREMENT_COUNTER":
        // console.log( state.counter-1);
        return {
            counter: state.counter - 1,
        };
    case "RESET_COUNTER":
        return {
            counter: 0,
        };

    default:
      return {
        ...state,
      };
  }
};

export { CounterReducer };
