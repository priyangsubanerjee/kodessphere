import React from "react";
import KonnexwebPhase2 from "../SubTub/KonnexwebPhase2";
import { useSession } from "next-auth/react";
import KognizancePhase1 from "../SubSub/KognizancePhase1";
import KognizancePhase2 from "../SubTub/KognizancePhase2";

function PhaseTwo() {
  const session = useSession();
  return (
    <div className="px-10 py-6">
      <div className="mt-7 border-b pb-6">
        <h1 className="text-2xl font-semibold">
          Phase{" "}
          <span className="font-light">
            two submission ({session.data?.user?.arena})
          </span>
        </h1>
        <p className="text-sm mt-3 text-neutral-700">
          Logical thinking and problem-solving skills are the key to success in
          this phase.
        </p>
      </div>
      {session.data?.user?.arena === "Konnexweb" ? (
        <KonnexwebPhase2 />
      ) : session.data?.user?.arena === "Kernelkombat" ? (
        <></>
      ) : session.data?.user?.arena == "Kognizance" ? (
        <KognizancePhase2 />
      ) : (
        <div>PhaseOne</div>
      )}
    </div>
  );
}

export default PhaseTwo;
