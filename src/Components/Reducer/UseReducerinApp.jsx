// 2. Use the Reducer in a Component

// Now, use the useReducer() hook in a functional component to manage state.

// jsx

// src/App.js
import React, { useReducer } from 'react';
import reducer from './reducer';

function App() {
  // Initialize state and dispatch function using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default App;

// In this component:

//     useReducer() initializes the state with { count: 0 } and provides the dispatch function.
//     Buttons are provided to dispatch actions (INCREMENT, DECREMENT, and RESET) which will update the state according to the reducer logic.