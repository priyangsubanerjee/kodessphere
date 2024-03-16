/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Snippet } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

function Kognizance() {
  const devices = [
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
      description: "Control the brightness of the led",
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

  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  return (
    <div className="pt-7 pb-10">
      <div className="text-sm bg-sky-100 border-l-2 border-sky-600 p-5 leading-7">
        <Icon icon="ant-design:thunderbolt-outlined" width="24" height="24" />
        <p className="mt-3 leading-7">
          This App Dev event will enhance students to explore this domain and it
          will be great of them to study regarding this from the beginning which
          will help us thus Konnexions as the IT WEB SOCIETY of KIIT to organize
          events specially App Dev events in the near future as well.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Problem statement :
        </h2>
        <p className="text-sm leading-7 mt-3">
          Design a simple mobile app that assists users in setting and tracking
          personal goals .The app should allow users to create, manage and
          monitor their goals, providing motivational reminders, progress
          tracking and a simple interface for goal setting and accomplishment.
          The interface should be aesthetically pleasing, intuitive to navigate,
          and follow best practices for user experience (UX) and user interface
          (UI) design.
        </p>
      </div>
      <div className="mt-16">
        <Link
          className="bg-black text-white py-3 px-4 rounded text-sm"
          href="/pdf/kognizance.pdf"
        >
          Click here for a detailed information
        </Link>
      </div>
    </div>
  );
}

export default Kognizance;
