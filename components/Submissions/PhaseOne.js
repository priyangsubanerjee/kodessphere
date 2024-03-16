import { useSession } from "next-auth/react";
import React from "react";
import KonnexwebPhase1 from "../SubSub/KonnexwebPhase1";
import KernelkombatPhase1 from "../SubSub/KernelkombatPhase1";
import KognizancePhase1 from "../SubSub/KognizancePhase1";

function PhaseOne() {
  const session = useSession();
  return (
    <div className="px-10 py-6">
      <div className="mt-7 border-b pb-6">
        <h1 className="text-2xl font-semibold">
          Phase{" "}
          <span className="font-light">
            one submission ({session.data?.user?.arena})
          </span>
        </h1>
        <p className="text-sm mt-3 text-neutral-700">
          Logical thinking and problem-solving skills are the key to success in
          this phase.
        </p>
      </div>
      {session.data?.user?.arena === "Konnexweb" ? (
        <KonnexwebPhase1 />
      ) : session.data?.user?.arena === "Kernelkombat" ? (
        <KernelkombatPhase1 />
      ) : session.data?.user?.arena == "Kognizance" ? (
        <KognizancePhase1 />
      ) : (
        <div>PhaseOne</div>
      )}
    </div>
  );
}

export default PhaseOne;
