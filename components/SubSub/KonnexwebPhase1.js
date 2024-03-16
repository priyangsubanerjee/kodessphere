import { Button, Textarea } from "@nextui-org/react";
import React from "react";

function KonnexwebPhase1() {
  return (
    <div className="mt-12 max-w-3xl pb-20">
      <div>
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 1:</span> In your opinion,
          what&apos;s the biggest challenge facing API design today?
          (Scalability, Security, Ease of Use)
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
          <span className="font-semibold">Question 2:</span> REST emphasizes
          statelessness. Are there situations where state management in APIs can
          be beneficial?
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
          <span className="font-semibold">Question 3:</span> Balancing
          scalability with low latency is a challenge in real-time
          communication. What are some promising approaches to achieve this
          balance?
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

export default KonnexwebPhase1;
