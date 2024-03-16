/* eslint-disable @next/next/no-img-element */
"use client";
import Details from "@/components/Details";
import Sidenav from "@/components/Sidenav";
import GlobalState from "@/context/GlobalStates";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";

export const dynamic = "force-dynamic";

function Dashboard() {
  const session = useSession();
  const { count } = useContext(GlobalState);
  return (
    <div className="flex max-h-screen h-screen bg-neutral-50">
      <Sidenav />
      <Details />
    </div>
  );
}

export const revalidate = 1;

export default Dashboard;
