import { Button, Textarea } from "@nextui-org/react";
import React from "react";

function KognizancePhase1() {
  return (
    <div className="mt-12 max-w-3xl pb-20">
      <div>
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 1:</span> Due
        </div>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>
      <div className="mt-14">
        <h2 className="font-normal leading-8">
          <span className="font-semibold">Question 2:</span> Due
        </h2>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>
      <div className="mt-14">
        <h2 className="font-normal leading-8">
          <span className="font-semibold">Question 3:</span> Due
        </h2>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>
      <div className="flex justify-between mt-16 text-sm">
        <p>
          <span className="font-semibold">Note:</span> You can submit only once.
        </p>
        <Button className="rounded-md h-fit text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed">
          <div className="px-3 py-3 block">Submit phase 1</div>
        </Button>
      </div>
    </div>
  );
}

export default KognizancePhase1;
