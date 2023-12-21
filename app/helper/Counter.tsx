// CounterComponent.tsx
import React, { useContext } from "react";
import { StateContext } from "./stateManagement";

const CounterComponent: React.FC = () => {
  const { state, dispatch } = useContext(StateContext) || {
    state: { count: 0 },
    dispatch: () => {
      console.log(state.count);
    },
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
