import type { MetaFunction } from "@remix-run/node";
import { StateProvider } from "../helper/stateManagement";
import TestView from "~/view";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <StateProvider initialState={{ count: 0 }}>
        <TestView />
      </StateProvider>
    </div>
  );
}
