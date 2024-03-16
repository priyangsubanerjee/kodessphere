import GlobalState from "@/context/GlobalStates";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import toast from "react-hot-toast";

// colab link

// ps1 f1score accuracy weightFile Link, Python

// ps2 accuracy, precision, recall, f1score, Python, weightFile Link

function KernelkombatPhase2() {
  const { count, setCount } = useContext(GlobalState);
  const session = useSession();
  const [colabLink, setColabLink] = React.useState("");
  const [ps1F1Score, setPs1F1Score] = React.useState("");
  const [ps1Accuracy, setPs1Accuracy] = React.useState("");
  const [ps1WeightFileLink, setPs1WeightFileLink] = React.useState("");
  const [ps1PythonCode, setPs1PythonCode] = React.useState("");
  const [ps2F1Score, setPs2F1Score] = React.useState("");
  const [ps2Accuracy, setPs2Accuracy] = React.useState("");
  const [ps2Precision, setPs2Precision] = React.useState("");
  const [ps2Recall, setPs2Recall] = React.useState("");
  const [ps2WeightFileLink, setPs2WeightFileLink] = React.useState("");
  const [ps2PythonCode, setPs2PythonCode] = React.useState("");

  const handleSubmit = async () => {
    toast.loading("Submitting...");
    let submitRequest = await axios.post("/api/submission/phase-two", {
      id: session.data.user.id,
      name: session.data.user.name,
      arena: session.data.user.arena,
      gmail: session.data.user.email,
      content: {
        colabLink: colabLink,
        ps1F1Score: ps1F1Score,
        ps1Accuracy: ps1Accuracy,
        ps1WeightFileLink: ps1WeightFileLink,
        ps1PythonCode: ps1PythonCode,
        ps2F1Score: ps2F1Score,
        ps2Accuracy: ps2Accuracy,
        ps2Precision: ps2Precision,
        ps2Recall: ps2Recall,
        ps2WeightFileLink: ps2WeightFileLink,
        ps2PythonCode: ps2PythonCode,
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
          <span className="font-semibold">Question 1:</span> Google colab
          repository link
        </div>
        <Textarea
          placeholder="Paste your Google colab repository link here"
          className="w-full col-span-2 mt-4"
          value={colabLink}
          onChange={(e) => setColabLink(e.target.value)}
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>

      <div className="mt-12">
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 2:</span> Specifics for PS-1
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="F1 Score"
            value={ps1F1Score}
            onChange={(e) => setPs1F1Score(e.target.value)}
          />
          <Input
            label="Accuracy"
            value={ps1Accuracy}
            onChange={(e) => setPs1Accuracy(e.target.value)}
          />
          <Input
            label="Weight file link (Google Drive)"
            value={ps1WeightFileLink}
            onChange={(e) => setPs1WeightFileLink(e.target.value)}
          />
        </div>
        <Textarea
          placeholder="Python code snippet"
          className="w-full col-span-2 mt-4"
          value={ps1PythonCode}
          onChange={(e) => setPs1PythonCode(e.target.value)}
          rows={10}
          classNames={{
            input: "pl-3 pt-2",
            label: "pl-3 pt-4",
          }}
        />
      </div>

      <div className="mt-12">
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 3:</span> Specifics for PS-2
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="F1 Score"
            value={ps2F1Score}
            onChange={(e) => setPs2F1Score(e.target.value)}
          />
          <Input
            label="Accuracy"
            value={ps2Accuracy}
            onChange={(e) => setPs2Accuracy(e.target.value)}
          />
          <Input
            label="Precision"
            value={ps2Precision}
            onChange={(e) => setPs2Precision(e.target.value)}
          />
          <Input
            label="Recall"
            value={ps2Recall}
            onChange={(e) => setPs2Recall(e.target.value)}
          />

          <Input
            label="Weight file link (Google Drive)"
            value={ps2WeightFileLink}
            onChange={(e) => setPs2WeightFileLink(e.target.value)}
          />
        </div>
        <Textarea
          placeholder="Python code snippet"
          className="w-full col-span-2 mt-4"
          value={ps2PythonCode}
          onChange={(e) => setPs2PythonCode(e.target.value)}
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

export default KernelkombatPhase2;
