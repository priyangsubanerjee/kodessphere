/* eslint-disable @next/next/no-img-element */
"use client";
import GlobalState from "@/context/GlobalStates";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import QRCode from "qrcode.react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

function Sidenav() {
  const session = useSession();
  const { count, setCount } = useContext(GlobalState);
  const [isQrOpen, setIsQrOpen] = useState(false);

  const handlePhaseOneSubmission = async () => {
    toast.loading("Checking permission");
    let permissionRequested = await axios.get("/permissions/phase-one");
    toast.remove();
    if (permissionRequested.data.success) {
      if (permissionRequested.data.value == true) {
        setCount(4);
      } else {
        toast.error("Permission not granted yet.");
        if (count == 4) {
          setCount(0);
        }
      }
    } else {
      alert("Something went wrong");
    }
  };

  const handlePhaseTwoSubmission = async () => {
    toast.loading("Checking permission");
    let permissionRequested = await axios.get("/permissions/phase-two");
    toast.remove();
    if (permissionRequested.data.success) {
      if (permissionRequested.data.value == true) {
        setCount(5);
      } else {
        toast.error("Permission not granted yet.");
        if (count == 5) {
          setCount(0);
        }
      }
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="h-full max-h-screen overflow-auto w-[300px] pb-10 bg-white shrink-0">
      <div
        style={{
          opacity: session.status === "authenticated" ? 1 : 0.3,
        }}
      >
        <div className="mt-10 flex flex-col items-center">
          <img
            src="/event-static/event-logo.png"
            className="h-10 mx-auto"
            alt=""
          />
          <button
            onClick={() => {
              setIsQrOpen(!isQrOpen);
            }}
            className="bg-neutral-50 py-2 text-sm px-4 mt-3 rounded-full flex items-center space-x-2"
          >
            <Icon icon="solar:qr-code-broken" width="20" height="20" />
            <span>{session?.data?.user?.id}</span>
          </button>
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

            {session.data?.user?.arena === "Konnexweb" && (
              <Link
                target="_blank"
                href={`/simulation/${session.data?.user?.id}`}
              >
                <li className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full">
                  <Icon
                    icon="solar:lightbulb-bolt-line-duotone"
                    width="20"
                    height="20"
                  />
                  <span className="ml-3 text-sm">Simulation</span>
                </li>
              </Link>
            )}
            <li
              onClick={() => setCount(1)}
              style={{
                backgroundColor: count === 1 ? "rgb(224 242 254)" : "",
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
            <li
              onClick={() => setCount(2)}
              style={{
                backgroundColor: count === 2 ? "rgb(224 242 254)" : "",
              }}
              className="flex items-center cursor-pointer hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon icon="ph:hand-light" width="20" height="20" />
              <span className="ml-3 text-sm">Raise hand</span>
            </li>
          </ul>
        </div>
        <div className="mt-7 px-4 ">
          <span className="font-medium text-xs text-neutral-500">
            Submissions
          </span>
          <ul className="mt-3 space-y-1">
            <li
              onClick={() => handlePhaseOneSubmission()}
              className="flex items-center cursor-pointer bg-sky-50/0 hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon icon="codicon:lock-small" width="20" height="20" />
              <span className="ml-3 text-sm">Phase 1 submission</span>
            </li>
            <li
              onClick={() => handlePhaseTwoSubmission()}
              className="flex cursor-pointer items-center bg-sky-50/0 hover:bg-sky-50 px-5 py-3 rounded-full"
            >
              <Icon icon="codicon:lock-small" width="20" height="20" />
              <span className="ml-3 text-sm">Phase 2 submission</span>
            </li>
          </ul>
        </div>
        <div className="mt-7 px-4 ">
          <span className="font-medium text-xs text-neutral-500">Team</span>
          <ul className="mt-3 space-y-1">
            <li
              onClick={() => setCount(3)}
              style={{
                backgroundColor: count === 3 ? "rgb(224 242 254)" : "",
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
              {session?.data?.user?.arena}
            </p>
            <p className="text-base text-neutral-800 font-medium mt-2">
              {session?.data?.user?.name}
            </p>
            <p className="text-xs text-neutral-600 tracking-wide mt-1">
              {session?.data?.user?.email}
            </p>
            <Button onClick={() => signOut()} size="sm" className="mt-4">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {isQrOpen && (
        <div className="fixed inset-0 z-10 h-full w-full bg-black/50 flex items-center justify-center">
          <div className="w-[220px] bg-white rounded-md p-3 flex flex-col items-center justify-center">
            <QRCode
              style={{
                width: "200px",
                height: "200px",
              }}
              className="h-full w-full"
              value={session?.data?.user?.id}
            />
            <button
              onClick={() => setIsQrOpen(false)}
              className="mt-5 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
