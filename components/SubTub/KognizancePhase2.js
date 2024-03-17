import GlobalState from "@/context/GlobalStates";
import { Button, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

function KognizancePhase2() {
  const session = useSession();
  const { count, setCount } = useContext(GlobalState);
  const [an1, setAn1] = useState("");
  const [an2, setAn2] = useState("");

  const handleSubmit = async () => {
    if (an1 === "") {
      toast.error("Please fill all fields");
      return;
    }

    toast.loading("Submitting...");
    let submitRequest = await axios.post("/api/submission/phase-two", {
      id: session.data.user.id,
      name: session.data.user.name,
      arena: session.data.user.arena,
      gmail: session.data.user.email,
      content: {
        githubLink: an1,
        deployedLink: an2,
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
          <span className="font-semibold">Question 1:</span> GitHub link to your
          project
        </div>
        <Textarea
          placeholder="Paste your GitHub link here"
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
      <div className="mt-10">
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 2:</span> Deployed project
          link (if any)
        </div>
        <Textarea
          placeholder="Paste your GitHub link here"
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
      <div className="flex justify-between mt-16 text-sm">
        <p>
          <span className="font-semibold">Note:</span> You can submit only once.
        </p>
        <Button
          onClick={() => handleSubmit()}
          className="rounded-md h-fit text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="px-3 py-3 block">Submit phase 2</div>
        </Button>
      </div>
    </div>
  );
}

export default KognizancePhase2;
