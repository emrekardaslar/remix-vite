// stateManagement.ts
import { createContext, useReducer, Dispatch, useContext } from "react";
import { reducer, initialState } from "../helper/reducer";

interface State {
  count: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export const StateContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

export const StateProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function incrementCounter() {
    dispatch({ type: "INCREMENT" });
  }

  const ctxValue: any = {
    ...state,
    incrementCounter,
  };

  return (
    <StateContext.Provider value={ctxValue}>{children}</StateContext.Provider>
  );
};

export const useTempContext = () => {
  return useContext(StateContext);
};
