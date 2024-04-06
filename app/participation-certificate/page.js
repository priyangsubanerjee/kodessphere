/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Certificate() {
  const [loading, setLoading] = useState("");
  const [teamID, setTeamID] = useState("");
  const [team, setTeam] = useState(null);

  const hanldePrint = (pname, id) => {
    try {
      const input = document.getElementById(id);
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "px", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, width, height, "", "FAST");
        pdf.save(`${pname}.pdf`);
        document.getElementById(`status-${id}`).innerText = "Downloaded";
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CertificateComponent = ({
    name = "Priyangsu",
    email = "22052490@kiit.ac.in",
  }) => {
    return (
      <div
        onClick={() => hanldePrint(name, email)}
        id={email}
        className="h-[2480px] w-[3508px] scale-[0.4] bg-[url('/cp.png')] bg-no-repeat bg-cover relative"
      >
        <h1 className="text-[70px] w-[1180px] text-center absolute left-[1610px] top-[1120px] block font-medium">
          {name}
        </h1>
      </div>
    );
  };

  const getTeam = async () => {
    setLoading(true);
    let getTeamReq = await axios.post(
      "/api/checks/team-present",
      {
        id: teamID,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (getTeamReq.data.success) {
      setTeam(getTeamReq.data.team);
      toast.success("Team found");
    } else {
    }
  };

  return (
    <div className="pt-20 lg:pt-24 pb-10 overflow-hidden">
      {team == null ? (
        <>
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
                Download your participation certificate by entering your team
                ID.
              </p>
            </div>
          </div>

          <div className="md:w-[500px] max-w-[500px] bg-white relative mt-10 border rounded-2xl mx-5 md:mx-auto p-6">
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

            <div className="flex items-center justify-end mt-10">
              <Button
                isLoading={loading}
                onClick={() => {
                  getTeam();
                }}
                className="bg-black text-white rounded-md text-sm"
              >
                Proceed
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-5">
            <img
              src="/event-static/event-logo.png"
              className="h-8 mx-auto"
              alt=""
            />
            <h1 className="text-center text-2xl md:text-4xl font-semibold mt-8">
              Certificate of participation
            </h1>
            <p className="text-center text-sm leading-7 mt-5 text-neutral-600">
              Hope you had a great time at the event. You can download your
              participation certificate by clicking the button below.
            </p>
          </div>

          <div className="max-w-lg mx-auto mt-10 grid grid-cols-1 gap-2 px-5">
            {team.members.map((member, index) => (
              <div
                className="bg-white p-5 border rounded-md flex items-start justify-between"
                key={index}
              >
                <div>
                  <p className="md:text-lg font-medium">{member.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {member.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    hanldePrint(member.name, member.email);
                    document.getElementById(
                      `status-${member.email}`
                    ).innerText = "Downloading...";
                  }}
                  className="text-sm text-blue-700 flex items-center space-x-2"
                >
                  <span id={`status-${member.email}`}>Download</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.22 20.75H5.78A2.64 2.64 0 0 1 3.25 18v-3a.75.75 0 0 1 1.5 0v3a1.16 1.16 0 0 0 1 1.25h12.47a1.16 1.16 0 0 0 1-1.25v-3a.75.75 0 0 1 1.5 0v3a2.64 2.64 0 0 1-2.5 2.75"
                      />
                      <path
                        fill="currentColor"
                        d="M12 15.75a.74.74 0 0 1-.53-.22l-4-4a.75.75 0 0 1 1.06-1.06L12 13.94l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4a.74.74 0 0 1-.53.22"
                      />
                      <path
                        fill="currentColor"
                        d="M12 15.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v11a.76.76 0 0 1-.75.75"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="h-0 opacity-0">
            {team.members.map((member, index) => (
              <CertificateComponent
                key={index}
                name={member.name}
                email={member.email}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Certificate;
