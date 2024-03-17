/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Snippet } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

function Konnexweb() {
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
          APIs are the building blocks of most modern web and mobile
          applications. They allow developers to integrate features and data
          from other sources without writing everything from scratch. This saves
          time and effort, and allows developers to focus on the unique aspects
          of their application.
        </p>
        <p className="mt-3">
          Many APIs provide access to valuable data that developers can use in
          their applications. This could include things like weather data, stock
          prices, or demographic information. By using APIs, developers can
          create applications that are more informative and insightful.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Problem statement :
        </h2>
        <p className="text-sm leading-7 mt-3">
          Craft a web interface that seamlessly interacts with the provided API
          and framework to control smart home elements, specifically focusing on
          fan lights and other equipment. The interface should be aesthetically
          pleasing, intuitive to navigate, and follow best practices for user
          experience (UX) and user interface (UI) design.
        </p>
      </div>
      <div className="mt-16">
        <Link
          className="bg-black text-white py-3 px-4 rounded text-sm"
          href="/pdf/konnexweb.pdf"
        >
          Click here for a detailed information
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Api reference :
        </h2>
        <div className="h-14 px-4 mt-3 bg-white max-w-3xl border rounded-md flex items-center">
          <span className="bg-pink-100 px-3 py-1 rounded-full text-xs">
            Base path
          </span>
          <span className="text-sm ml-3 font-mono">
            https://kodessphere-api.vercel.app
          </span>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Example requests
        </h2>
        <div className="mt-4 rounded-md">
          <div className="flex space-x-3">
            {devices.map((device, i) => (
              <button
                key={i}
                onClick={() => setSelectedDevice(device)}
                style={
                  selectedDevice.name === device.name
                    ? {
                        backgroundColor: "#fff",
                        border: "1px solid rgb(229 229 229)",
                      }
                    : {
                        border: "1px solid #00000000",
                      }
                }
                className="h-fit py-4 w-28 flex flex-col items-center justify-center rounded-lg"
              >
                <img src={device.icon} alt="" className="w-12" />
                <span className="mt-4 text-sm">{device.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white mt-4 border border-neutral-200 rounded-lg">
          <div className="flex items-center">
            <span className="bg-yellow-100 text-black px-4 py-2 font-semibold rounded-full tracking-wider text-xs">
              POST
            </span>
            <span className="text-sm ml-3 font-mono">/devices</span>
          </div>
          <table className="mt-4 w-full">
            <thead className="text-left">
              <tr>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Parameters
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Type
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Value
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td className="font-normal px-5 py-3 text-sm">teamid</td>
                <td className="font-normal px-5 py-3 text-sm text-green-600">
                  String
                </td>
                <td className="font-normal px-5 py-3 text-sm">
                  Your teams unique id
                </td>
              </tr>
              <tr>
                <td className="font-normal px-5 py-3 text-sm">device</td>
                <td className="font-normal px-5 py-3 text-sm text-green-600">
                  String
                </td>
                <td className="font-normal px-5 py-3 text-sm">
                  {selectedDevice.api_name}
                </td>
              </tr>
              <tr>
                <td className="font-normal px-5 py-3 text-sm">value</td>
                <td className="font-normal px-5 py-3 text-sm text-green-600">
                  {selectedDevice.api_value_type}
                </td>
                <td className="font-normal px-5 py-3 text-sm">
                  {selectedDevice.api_value}
                </td>
                <td className="font-normal px-5 py-3 text-sm">
                  {selectedDevice.description}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-semibold text-neutral-800 text-base mt-12">
          Get updated device status
        </h2>
        <div className="p-6 bg-white mt-4 border border-neutral-200 rounded-lg">
          <div className="flex items-center">
            <span className="bg-red-100 text-black px-4 py-2 font-semibold rounded-full tracking-wider text-xs">
              GET
            </span>
            <span className="text-sm ml-3 font-mono">/devices/:id</span>
          </div>
          <table className="mt-4 w-full">
            <thead className="text-left">
              <tr>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Parameters
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Type
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Value
                </th>
                <th className="font-semibold text-neutral-600 px-5 py-4 text-sm">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td className="font-normal px-5 py-3 text-sm">id</td>
                <td className="font-normal px-5 py-3 text-sm text-green-600">
                  String
                </td>
                <td className="font-normal px-5 py-3 text-sm">
                  Your teams unique id
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Konnexweb;
