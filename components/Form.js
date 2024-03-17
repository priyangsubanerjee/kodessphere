/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
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
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { signIn, useSession } from "next-auth/react";

const app = initializeApp(firebaseConfig);

function Form() {
  const session = useSession();
  const [loading, setLoading] = useState("");
  const [teamID, setTeamID] = useState(""); // ytexKCt
  const db = getFirestore(app);

  const handleSubmit = async () => {
    let eventStarted = await axios.get("/permissions/event-started");
    console.log(eventStarted.data);
    if (eventStarted.data.success) {
      if (!eventStarted.data.value == true) {
        toast.error("Event not started");
        return;
      }
    }

    setLoading(true);
    toast.loading("Checking team presence...");

    let checkPresentRequest = await axios.post("/api/checks/team-present", {
      id: teamID,
    });

    toast.dismiss();

    if (checkPresentRequest.data.success) {
      const docRef = doc(db, "teams", teamID);
      const docSnap = await getDoc(docRef);

      if (checkPresentRequest.data.team.arena == "Konnexweb") {
        if (!docSnap.exists()) {
          toast.loading("Creating simulation env...");
          await setDoc(docRef, {
            arena: checkPresentRequest.data.team.arena,
            name: checkPresentRequest.data.team.name,
            pid: teamID,
            fan: 0,
            count: 0,
            bulb: 0,
            led: "#fff",
            message: "",
            ac: {
              state: 0,
              temp: 0,
            },
          });
          toast.dismiss();
        }
      }

      toast.loading("Signing in...");

      let verifyPasswordRequest = await signIn("credentials", {
        pid: teamID,
        redirect: false,
      });

      if (verifyPasswordRequest.ok) {
        toast.dismiss();
        toast.success("Signed in");
        location.href = "/dashboard";
      } else {
        toast.dismiss();
        toast.error("Invalid request");
      }
    } else {
      toast.error("Team not found");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="md:w-[500px] max-w-[500px] bg-white  mt-10 border rounded-2xl mx-auto p-6">
        <div>
          <label className="text-sm text-neutral-500" htmlFor="">
            Enter registered team id
          </label>
          <Input
            label="Enter Team ID"
            type="text"
            className="mt-3"
            value={teamID}
            onChange={(e) => setTeamID(e.target.value)}
            required
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-10">
          <Link href="https://events.konnexions.dev/contact">
            <button className="flex items-center space-x-2 text-sm">
              <span>Dont have a team id?</span>
            </button>
          </Link>
          <Button
            isLoading={loading}
            onClick={() => {
              handleSubmit();
            }}
            className="bg-black text-white rounded-md text-sm"
          >
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
}

export default Form;
