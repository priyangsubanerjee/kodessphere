import GlobalState from "@/context/GlobalStates";
import React, { useContext } from "react";
import Members from "./Fragments/Members";
import Dashboard from "./Fragments/Dashboard";
import Rules from "./Fragments/Rules";
import RaiseHand from "./Fragments/RaiseHand";
import PhaseOne from "./Submissions/PhaseOne";
import PhaseTwo from "./Submissions/PhaseTwo";

function Details() {
  const { count, setCount } = useContext(GlobalState);

  return (
    <div className="h-screen max-h-screen bg-neutral-50 w-full overflow-auto">
      {count == 0 ? (
        <Dashboard />
      ) : count == 1 ? (
        <Rules />
      ) : count == 2 ? (
        <RaiseHand />
      ) : count == 3 ? (
        <Members />
      ) : count == 4 ? (
        <PhaseOne />
      ) : count == 5 ? (
        <PhaseTwo />
      ) : null}
    </div>
  );
}

export default Details;
