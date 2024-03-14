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

const app = initializeApp(firebaseConfig);

function Form() {
  const [teamID, setTeamID] = useState("");

  const handleSubmit = async () => {
    // check if team is present in mongodb

    let checkPresentRequest = await axios.post("/api/checks/team-present", {
      id: teamID,
    });
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
          <button className="flex items-center space-x-2 text-sm">
            <span>Dont have a team id?</span>
            <Link
              href={"/register"}
              className="flex items-center text-blue-600 space-x-2 text-sm hover:underline"
            >
              <span>Contact us</span>
              <span className="translate-y-[1px]">
                <Icon icon="formkit:right" />
              </span>
            </Link>
          </button>
          <Button
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
