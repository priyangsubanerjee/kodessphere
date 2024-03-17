/* eslint-disable @next/next/no-img-element */
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/helper/firebase/appConfig";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import random from "random-string-generator";
import React from "react";
import Form from "@/components/Form";
import Link from "next/link";
import { Icon } from "@iconify/react";

const app = initializeApp(firebaseConfig);

export const metadata = {
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

export default function Home() {
  const db = getFirestore(app);

  return (
    <div className="pt-20 lg:pt-24 ">
      <div className="relative">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwNC1udW5ueS0wMTJfMy5qcGc.jpg"
          className="w-full h-[250px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="z-10 relative px-4">
        <img
          src="/event-static/event-logo.png"
          className="h-12 mx-auto"
          alt=""
        />
        <div className="flex items-center justify-center space-x-4 mt-4">
          <p className="text-sm text-neutral-700 text-center leading-7">
            Are you ready to participate & battle it out with the best of the
            best?
          </p>
        </div>
        <Form />

        <div className="max-w-2xl mx-auto mt-16 text-sm">
          <h2 className="text-lg font-semibold mt-10">Are you excited ?</h2>
          <p className="leading-7 mt-2 text-neutral-500">
            We are too! Gear up, coders! 🚀 Kodesphere v1.0 by Konnexions is
            happening now. Dive into a world of coding, challenges, and
            unparalleled innovation.
          </p>

          <div className="mt-10 flex">
            <Link target="_blank" href={"/event-static/event-guide.pdf"}>
              <button className="text-sm ml-auto text-neutral-700 hover:underline flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288L440 72"
                  />
                </svg>
                <span>Event guide</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
