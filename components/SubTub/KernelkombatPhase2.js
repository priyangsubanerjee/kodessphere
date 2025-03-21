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
  const [ps1ColabLink, setPs1ColabLink] = React.useState("");
  const [ps1F1Score, setPs1F1Score] = React.useState("");
  const [ps1Accuracy, setPs1Accuracy] = React.useState("");
  const [ps1WeightFileLink, setPs1WeightFileLink] = React.useState("");
  const [ps1PythonCode, setPs1PythonCode] = React.useState("");
  const [ps2ColabLink, setPs2ColabLink] = React.useState("");
  const [ps2Rmse, setPs2Rmse] = React.useState("");
  const [ps2WeightFileLink, setPs2WeightFileLink] = React.useState("");
  const [ps2PythonCode, setPs2PythonCode] = React.useState("");
  const [ps3ColabLink, setPs3ColabLink] = React.useState("");
  const [ps3F1Score, setPs3F1Score] = React.useState("");
  const [ps3Accuracy, setPs3Accuracy] = React.useState("");
  const [ps3WeightFileLink, setPs3WeightFileLink] = React.useState("");
  const [ps3PythonCode, setPs3PythonCode] = React.useState("");

  const handleSubmit = async () => {
    toast.loading("Submitting...");

    let permissionSub = await axios.get("/permissions/ml-sub");

    if (permissionSub.data.success) {
      if (permissionSub.data.value != true) {
        toast.dismiss();
        toast.error("Submissions Closed");
        return;
      } else {
        let submitRequest = await axios.post("/api/submission/phase-two", {
          id: session.data.user.id,
          name: session.data.user.name,
          arena: session.data.user.arena,
          gmail: session.data.user.email,
          content: {
            ps1ColabLink: ps1ColabLink,
            ps1F1Score: ps1F1Score,
            ps1Accuracy: ps1Accuracy,
            ps1WeightFileLink: ps1WeightFileLink,
            ps1PythonCode: ps1PythonCode,
            ps2ColabLink: ps2ColabLink,
            ps2Rmse: ps2Rmse,
            ps2WeightFileLink: ps2WeightFileLink,
            ps2PythonCode: ps2PythonCode,
            ps3ColabLink: ps3ColabLink,
            ps3F1Score: ps3F1Score,
            ps3Accuracy: ps3Accuracy,
            ps3WeightFileLink: ps3WeightFileLink,
            ps3PythonCode: ps3PythonCode,
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
      }
    }
  };

  return (
    <div className="mt-12 max-w-3xl pb-20">
      <div>
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 1:</span> Specifics for PS-1
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="Colab notebook link"
            value={ps1ColabLink}
            onChange={(e) => setPs1ColabLink(e.target.value)}
          />
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
          <span className="font-semibold">Question 2:</span> Specifics for PS-2
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="Colab notebook link"
            value={ps2ColabLink}
            onChange={(e) => setPs2ColabLink(e.target.value)}
          />
          <Input
            label="RMSE"
            value={ps2Rmse}
            onChange={(e) => setPs2Rmse(e.target.value)}
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

      <div className="mt-12">
        <div className="font-normal leading-8">
          <span className="font-semibold">Question 3:</span> Specifics for PS-3
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="Colab notebook link"
            value={ps3ColabLink}
            onChange={(e) => setPs3ColabLink(e.target.value)}
          />
          <Input
            label="F1 Score"
            value={ps3F1Score}
            onChange={(e) => setPs3F1Score(e.target.value)}
          />
          <Input
            label="Accuracy"
            value={ps3Accuracy}
            onChange={(e) => setPs3Accuracy(e.target.value)}
          />

          <Input
            label="Weight file link (Google Drive)"
            value={ps3WeightFileLink}
            onChange={(e) => setPs3WeightFileLink(e.target.value)}
          />
        </div>
        <Textarea
          placeholder="Python code snippet"
          className="w-full col-span-2 mt-4"
          value={ps3PythonCode}
          onChange={(e) => setPs3PythonCode(e.target.value)}
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

export default KernelkombatPhase2;
