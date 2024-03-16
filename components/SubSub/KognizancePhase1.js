import GlobalState from "@/context/GlobalStates";
import { Button, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

function KognizancePhase1() {
  const { count, setCount } = useContext(GlobalState);
  const session = useSession();
  const [an1, setAn1] = useState("");
  const [an2, setAn2] = useState("");
  const [an3, setAn3] = useState("");

  const handleSubmit = async () => {
    toast.loading("Submitting...");
    let submitRequest = await axios.post("/api/submission/phase-one", {
      id: session.data.user.id,
      name: session.data.user.name,
      arena: session.data.user.arena,
      gmail: session.data.user.email,
      content: {
        question1: an1,
        question2: an2,
        question3: an3,
      },
    });

    toast.remove();
    if (submitRequest.data.success) {
      toast.success(submitRequest.data.message);
      setCount(0);
    } else {
      toast.error(submitRequest.data.message);
      setCount(0);
    }
  };
  return (
    <div className="mt-12 max-w-3xl pb-20">
      <div>
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 1:</span> What was the
          biggest challenge you encountered in this project? Describe the
          hurdles and their impact on the project&apos;s progression, offering
          insight into the complexities involved.
        </div>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          value={an1}
          onChange={(e) => setAn1(e.target.value)}
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>
      <div className="mt-14">
        <h2 className="font-normal leading-8">
          <span className="font-semibold">Question 2:</span> How does your app
          address the problem it aims to solve? Detail its key features and how
          they effectively tackle the issue.
        </h2>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          value={an2}
          onChange={(e) => setAn2(e.target.value)}
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>
      <div className="mt-14">
        <h2 className="font-normal leading-8">
          <span className="font-semibold">Question 3:</span> What improvements
          can be made to enhance the app&apos;s functionality in the future?
          Consider potential updates or features that could elevate the user
          experience and app performance.
        </h2>
        <Textarea
          placeholder="Your answer here (max 100 words)"
          className="w-full col-span-2 mt-4"
          value={an3}
          onChange={(e) => setAn3(e.target.value)}
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
        <Button
          onClick={() => handleSubmit()}
          className="rounded-md h-fit text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="px-3 py-3 block">Submit phase 1</div>
        </Button>
      </div>
    </div>
  );
}

export default KognizancePhase1;
