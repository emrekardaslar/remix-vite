import React from "react";
import { useTempContext } from "./helper/stateManagement";

function TestView() {
  const { count, incrementCounter } = useTempContext();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default TestView;
