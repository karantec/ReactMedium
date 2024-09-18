// 1. Define the Reducer Function

// First, define a reducer function that will handle state updates based on different action types.

// jsx

// src/reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

export default reducer;

// In this example:

//     The reducer handles three action types: INCREMENT, DECREMENT, and RESET.
//     Each action type returns a new state based on the current state and the action.