import { useSession } from "next-auth/react";
import React from "react";

function Dashboard() {
  const session = useSession();
  return (
    <div className="px-10 py-6">
      <div className="mt-7">
        <h1 className="text-2xl font-semibold">
          Instructions{" "}
          <span className="font-light">
            for {session?.data?.user?.arena.toLowerCase()}
          </span>
        </h1>
        <p className="text-sm text-neutral-600 mt-3">
          Please read the instructions carefully before proceeding.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
