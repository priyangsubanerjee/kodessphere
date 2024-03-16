import { useSession } from "next-auth/react";
import React from "react";
import Konnexweb from "../Instructions/Konnexweb";
import Kernelkombat from "../Instructions/Kernelkombat";

function Dashboard() {
  const session = useSession();
  return (
    <div className="px-10 py-6">
      <div className="mt-7 border-b pb-6">
        <h1 className="text-2xl font-semibold">
          Instructions{" "}
          <span className="font-light">
            for {session?.data?.user?.arena.toLowerCase()}
          </span>
        </h1>
        <p className="text-sm text-neutral-500 mt-3">
          Please read the instructions carefully before proceeding.
        </p>
      </div>
      {session.data?.user?.arena === "Konnexweb" ? (
        <Konnexweb />
      ) : session.data?.user?.arena === "Kernelkombat" ? (
        <Kernelkombat />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dashboard;
