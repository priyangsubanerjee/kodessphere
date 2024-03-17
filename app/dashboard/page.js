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

const metadata = {
  title: "Ultimate hackathon, Kodessphere - Konnexions",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Code. Collaborate. Conquer | Kodessphere",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      {
        url: "https://events.konnexions.dev/og-image-800.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://events.konnexions.dev/og-image-800.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

function Dashboard() {
  return (
    <div className="flex max-h-screen h-screen bg-neutral-50">
      <Sidenav />
      <Details />
    </div>
  );
}

export const revalidate = 1;

export default Dashboard;
