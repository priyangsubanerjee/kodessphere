"use client";

import { RaiseHandRequest } from "@/helper/raise-hand";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

function RaiseHand() {
  const session = useSession();
  const [category, setCategory] = React.useState([]);
  const [room, setRoom] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (category.length === 0 || room.length === 0 || message.length === 0) {
      toast.error("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    await RaiseHandRequest(
      session?.data?.user?.id,
      session?.data?.user?.name,
      session?.data?.user?.arena,
      session?.data?.user?.members[0]?.phone,
      category,
      room,
      message
    );

    toast.success("Submitted successfully");
    setIsLoading(false);
    setCategory("");
    setRoom("");
    setMessage("");
  };

  return (
    <div className="px-10 py-6">
      <div className="mt-7">
        <h1 className="text-2xl font-semibold">
          Raise <span className="font-light">hand</span>
        </h1>
        <p className="text-sm text-neutral-500 mt-3">
          Abusing this feature will lead to disqualification. Please use it only
          when you need help.
        </p>
      </div>

      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Select
            selectionMode="single"
            selectedKeys={category.length > 0 ? [category] : []}
            onChange={(e) => setCategory(e.target.value)}
            classNames={{
              value: "pl-3",
              label: "pl-3",
            }}
            label="Select category"
            className="w-full"
          >
            <SelectItem value="General" key="General">
              General
            </SelectItem>
            <SelectItem value="Technical" key="Technical">
              Technical
            </SelectItem>
            <SelectItem value="Technical" key="Technical">
              Team data update
            </SelectItem>
            <SelectItem value="API Exhausted" key="API Exhausted">
              API limit exceeded
            </SelectItem>
          </Select>
          <Select
            selectionMode="single"
            selectedKeys={room.length > 0 ? [room] : []}
            onChange={(e) => setRoom(e.target.value)}
            classNames={{
              value: "pl-3",
              label: "pl-3",
            }}
            label="Select room"
            className="w-full"
          >
            <SelectItem value="LH-301" key="LH-301">
              LH-301
            </SelectItem>
            <SelectItem value="LH-302" key="LH-302">
              LH-302
            </SelectItem>
            <SelectItem value="LH-303" key="LH-303">
              LH-303
            </SelectItem>
          </Select>
          <Textarea
            label="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full col-span-2"
            classNames={{
              input: "pl-3 pt-2",
              label: "pl-3 pt-4",
            }}
          />
        </div>

        <div className="flex justify-end mt-10">
          <Button
            isLoading={isLoading}
            isDisabled={
              category.length === 0 || room.length === 0 || message.length === 0
            }
            onClick={() => handleSubmit()}
            className="rounded-full text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="px-3">Submit & ask for help</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RaiseHand;
