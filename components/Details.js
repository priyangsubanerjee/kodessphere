import GlobalState from "@/context/GlobalStates";
import React, { useContext } from "react";
import Members from "./Fragments/Members";
import Dashboard from "./Fragments/Dashboard";
import Rules from "./Fragments/Rules";
import RaiseHand from "./Fragments/RaiseHand";

function Details() {
  const { count, setCount } = useContext(GlobalState);

  return (
    <div className="h-screen max-h-screen bg-neutral-50 w-full overflow-auto">
      {count == 0 ? (
        <Dashboard />
      ) : count == 3 ? (
        <Rules />
      ) : count == 4 ? (
        <Members />
      ) : count == 5 ? (
        <RaiseHand />
      ) : null}
    </div>
  );
}

export default Details;
