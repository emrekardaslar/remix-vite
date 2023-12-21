// stateManagement.ts
import { createContext, useReducer, Dispatch } from "react";

interface State {
  count: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export const initialState: State = {
  count: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
