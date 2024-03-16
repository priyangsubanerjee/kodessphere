/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Snippet } from "@nextui-org/react";
import React, { useState } from "react";

function Konnexweb() {
  const devices = [
    {
      name: "Fan",
      icon: "https://cdn-icons-png.flaticon.com/512/556/556878.png",
      api_name: "fan",
      api_request_type: "POST",
      api_value_type: "String",
      api_value: "0 - 5",
    },

    {
      name: "Bulb",
      icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
      api_name: "bulb",
      api_request_type: "POST",
      api_value_type: "String",
      api_value: "0 - 5",
    },

    {
      name: "Led",
      icon: "https://cdn-icons-png.flaticon.com/512/8534/8534359.png",
      api_name: "led",
      api_request_type: "POST",
      api_value_type: "String",
      api_value: "0 - 5",
    },

    {
      name: "A.C",
      icon: "https://cdn-icons-png.flaticon.com/512/911/911409.png",
      api_name: "ac",
      api_request_type: "POST",
      api_value_type: "String",
      api_value: "0 - 5",
    },
  ];

  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  return (
    <div className="pt-7">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolorem eligendi repellat maiores explicabo laboriosam voluptatem
          sapiente, quod ullam veritatis illo nobis magnam modi totam nihil
          accusamus laudantium. Sint, nisi.
        </p>
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
            https://api.konnexweb.com
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

        <div className="p-6 bg-white mt-4 border border-neutral-200 rounded-md">
          <div className="flex items-center">
            <span className="bg-yellow-100 text-black px-4 py-2 font-semibold rounded-full text-xs">
              POST
            </span>
            <span className="text-sm ml-3 font-mono">/api/v1/fan</span>
          </div>

          <table className="w-fit lg:w-full text-left mt-6">
            <thead>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-normal px-5 py-3 text-sm flex items-center space-x-4">
                  teamId
                </td>
                <td className="font-normal px-5 py-3 text-sm">String</td>
                <td className="font-normal px-5 py-3 text-sm"></td>
              </tr>
              <tr>
                <td className="font-normal px-5 py-3 text-sm flex items-center space-x-4">
                  name
                </td>
                <td className="font-normal px-5 py-3 text-sm">String</td>
                <td className="font-normal px-5 py-3 text-sm">fan</td>
              </tr>
              <tr>
                <td className="font-normal px-5 py-3 text-sm flex items-center space-x-4">
                  value
                </td>
                <td className="font-normal px-5 py-3 text-sm">Integer</td>
                <td className="font-normal px-5 py-3 text-sm">0 - 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Konnexweb;
