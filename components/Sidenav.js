/* eslint-disable @next/next/no-img-element */
"use client";
import GlobalState from "@/context/GlobalStates";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";

function Sidenav() {
  const session = useSession();
  const { count, setCount } = useContext(GlobalState);
  return (
    <div className="h-full max-h-screen overflow-auto w-[300px] pb-10 bg-white shrink-0">
      <div
        style={{
          opacity: session.status === "authenticated" ? 1 : 0,
        }}
      >
        <div className="mt-10 flex flex-col items-center">
          <img
            src="/event-static/event-logo.png"
            className="h-10 mx-auto"
            alt=""
          />
          <div className="bg-neutral-50 py-2 text-sm px-4 mt-3 rounded-full flex items-center space-x-2">
            <Icon icon="solar:qr-code-broken" width="20" height="20" />
            <span>ytexKCt</span>
          </div>
        </div>
        <div className="mt-10 px-4 ">
          <span className="font-medium text-xs text-neutral-500">General</span>
          <ul className="mt-3 space-y-1">
            <li
              style={{
                backgroundColor: count === 0 ? "rgb(224 242 254)" : "",
              }}
              onClick={() => setCount(0)}
              className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon icon="mage:dashboard-4" width="20" height="20" />
              <span className="ml-3 text-sm">Dashboard</span>
            </li>
            <li
              onClick={() => setCount(1)}
              style={{
                backgroundColor: count === 1 ? "rgb(224 242 254)" : "",
              }}
              className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon
                icon="solar:lightbulb-bolt-line-duotone"
                width="20"
                height="20"
              />
              <span className="ml-3 text-sm">Simulation</span>
            </li>
            <li
              onClick={() => setCount(3)}
              style={{
                backgroundColor: count === 3 ? "rgb(224 242 254)" : "",
              }}
              className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon
                icon="material-symbols-light:target"
                width="20"
                height="20"
              />
              <span className="ml-3 text-sm">Rules & regulations</span>
            </li>
          </ul>
        </div>
        <div className="mt-10 px-4 ">
          <span className="font-medium text-xs text-neutral-500">
            Submissions
          </span>
          <ul className="mt-3 space-y-1">
            <li className="flex items-center bg-sky-50/0 hover:bg-sky-50 px-5 py-3 rounded-full">
              <Icon icon="codicon:lock-small" width="20" height="20" />
              <span className="ml-3 text-sm">Phase 1 submission</span>
            </li>
            <li className="flex items-center bg-sky-50/0 hover:bg-sky-50 px-5 py-3 rounded-full">
              <Icon icon="codicon:lock-small" width="20" height="20" />
              <span className="ml-3 text-sm">Phase 2 submission</span>
            </li>
          </ul>
        </div>
        <div className="mt-10 px-4 ">
          <span className="font-medium text-xs text-neutral-500">Team</span>
          <ul className="mt-3 space-y-1">
            <li
              onClick={() => setCount(4)}
              style={{
                backgroundColor: count === 4 ? "rgb(224 242 254)" : "",
              }}
              className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon icon="octicon:people-24" width="20" height="20" />
              <span className="ml-3 text-sm">Team members</span>
            </li>
          </ul>
        </div>
        <div className="mt-10 px-4 ">
          <div className="p-4 bg-neutral-50 rounded-md">
            <p className="text-xs text-neutral-600 tracking-wide">
              {session?.data?.user.arena}
            </p>
            <p className="text-base text-neutral-800 font-medium mt-2">
              {session?.data?.user.name}
            </p>
            <p className="text-xs text-neutral-600 tracking-wide mt-1">
              {session?.data?.user.email}
            </p>
            <Button onClick={() => signOut()} size="sm" className="mt-4">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
