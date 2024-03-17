/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/helper/firebase/appConfig";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { Input, Spinner } from "@nextui-org/react";

const app = initializeApp(firebaseConfig);

function SimulationBoard({ tid }) {
  const session = useSession();
  const [devices, setDevices] = React.useState(null);
  const db = getFirestore(app);

  const devicesProps = [
    {
      name: "Fan",
      icon: "https://cdn-icons-png.flaticon.com/512/556/556878.png",
      api_name: "fan",
      api_request_type: "POST",
      api_value_type: "Integer",
      api_value: "0 - 5",
      description: "Control the speed of the fan",
    },

    {
      name: "Bulb",
      icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
      api_name: "bulb",
      api_request_type: "POST",
      api_value_type: "Integer",
      api_value: "0 - 1",
      description: "Turn on or off the bulb",
    },

    {
      name: "Led",
      icon: "https://cdn-icons-png.flaticon.com/512/8534/8534359.png",
      api_name: "led",
      api_request_type: "POST",
      api_value_type: "String",
      api_value: "#000000 - #ffffff",
      description: "Control the color of the led",
    },

    {
      name: "A.C",
      icon: "https://cdn-icons-png.flaticon.com/512/911/911409.png",
      api_name: "ac",
      api_request_type: "POST",
      api_value_type: "JSON",
      api_value: `
        {
            "temp": 25,
            "state": 0,
        }
      `,
      description: "Control the temperature (16-30) and state (0-1) of the A.C",
    },
  ];

  useEffect(() => {
    (async () => {
      if (session.status == "authenticated") {
        onSnapshot(doc(db, "teams", tid), (doc) => {
          setDevices(doc.data());
        });
      }
    })();
  }, [session.status]);

  return (
    <div className="py-16 min-h-screen bg-neutral-100">
      <h2 className="text-2xl font-semibold text-center text-neutral-700">
        Simulation page for {devices ? devices.name : tid}
      </h2>
      <p className="text-center text-sm text-neutral-600 mt-4">
        This page listens to the changes in the database and updates the UI in
        real time.
      </p>
      {devices == null ? (
        <div className="flex space-x-3 mt-12 items-center justify-center">
          <Spinner size="large" />
          <span className="text-sm text-neutral-500">
            Loading simulation board
          </span>
        </div>
      ) : (
        <div className="flex mt-12 justify-center flex-wrap gap-4">
          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold">Fan</h2>
            <p className="text-sm mt-2">{devicesProps[0].description}</p>
            <img className="h-12 mt-4" src={devicesProps[0].icon} alt="" />
            <Input
              className="mt-5"
              label="Speed"
              type="number"
              value={devices ? devices.fan : ""}
              readOnly
            />
          </div>
          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold">Bulb</h2>
            <p className="text-sm mt-2">{devicesProps[1].description}</p>
            <img className="h-12 mt-4" src={devicesProps[1].icon} alt="" />
            <Input
              className="mt-5"
              label="State"
              value={devices ? (devices.bulb == 0 ? "Off" : "On") : ""}
              readOnly
            />
          </div>
          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold">Led</h2>
            <p className="text-sm mt-2">{devicesProps[2].description}</p>
            <img className="h-12 mt-4" src={devicesProps[2].icon} alt="" />
            <Input
              className="mt-5"
              label="Color"
              value={devices ? devices.led : ""}
              readOnly
            />
          </div>
          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold">Air conditioner</h2>
            <p className="text-sm mt-2">Control state & temp of Ac</p>
            <img className="h-12 mt-4" src={devicesProps[3].icon} alt="" />
            <Input
              className="mt-5"
              label="State"
              value={devices ? (devices.ac.state == 0 ? "Off" : "On") : ""}
              readOnly
            />
            <Input
              className="mt-2"
              label="Temperature"
              value={devices ? devices.ac.temp : ""}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SimulationBoard;
