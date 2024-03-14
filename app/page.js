/* eslint-disable @next/next/no-img-element */
"use client";

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
          <p className="text-sm text-neutral-700">
            Are you ready to participate & battle it out with the best of the
            best?
          </p>
        </div>
        <Form />

        <div className="max-w-2xl mx-auto mt-16 text-sm">
          <h2 className="text-xl font-semibold">Rules and Regulations</h2>
          <p className="leading-7 mt-2 text-neutral-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            soluta culpa deleniti excepturi laudantium laboriosam facilis
            eveniet enim voluptate nulla pariatur saepe ducimus tempora autem
            amet hic est, quo quaerat.
          </p>

          <h2 className="text-lg font-semibold mt-10">Event schedule</h2>

          <p className="leading-7 mt-2 text-neutral-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            soluta culpa deleniti excepturi laudantium laboriosam facilis
            eveniet enim voluptate nulla pariatur saepe ducimus tempora autem
            amet hic est, quo quaerat.
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
