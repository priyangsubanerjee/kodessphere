/* eslint-disable @next/next/no-img-element */
"use client";
import Details from "@/components/Details";
import Sidenav from "@/components/Sidenav";
import GlobalState from "@/context/GlobalStates";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";

export const dynamic = "force-dynamic";

function DashboardPage() {
  return (
    <div className="flex max-h-screen h-screen bg-neutral-50">
      <Sidenav />
      <Details />
    </div>
  );
}

export default DashboardPage;
