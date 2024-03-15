import GlobalState from "@/context/GlobalStates";
import React, { useContext } from "react";
import Members from "./Fragments/Members";

function Details() {
  const { count, setCount } = useContext(GlobalState);

  return (
    <div className="h-screen max-h-screen bg-neutral-50 w-full overflow-auto">
      <Members />
    </div>
  );
}

export default Details;
