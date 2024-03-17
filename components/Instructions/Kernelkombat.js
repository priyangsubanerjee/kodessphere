import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Kernelkombat() {
  return (
    <div className="pt-7 pb-10">
      <div className="text-sm bg-sky-100 border-l-2 border-sky-600 p-5 leading-7">
        <Icon icon="ant-design:thunderbolt-outlined" width="24" height="24" />
        <p className="mt-3 leading-7">
          Welcome to the Hackathon! This event is designed to test your skills,
          creativity, and speed in solving a range of problems from easy to
          hard.
        </p>
        <ul className="mt-3 pl-4 list-disc">
          <li>3 Problem statements</li>
          <li>10:00am to 4:30pm</li>
          <li>Solve as many problems as you can</li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Problem statement 01:
        </h2>
        <p className="text-sm leading-7 mt-3">
          <span className="underline">Customer Churn Prediction:</span> Use a
          telecom dataset to predict whether a customer will churn based on
          their usage, service complaints and other features. This will involve
          handling imbalanced data and feature engineering.
        </p>
        <Link
          href={
            "https://drive.google.com/drive/folders/1TVgow_mdKvINADFW326Anlarvl7XzlVR"
          }
        >
          <button className="text-sm mt-3">Dataset →</button>
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Problem statement 02:
        </h2>
        <p className="text-sm leading-7 mt-3">
          <span className="underline">Predictive Maintenance:</span> Use sensor
          data from machines to predict when maintenance should be performed to
          prevent unexpected failures. This will involve time-series analysis
          and possibly dealing with large, noisy datasets.
        </p>
        <Link
          href={
            "https://drive.google.com/drive/folders/1TVgow_mdKvINADFW326Anlarvl7XzlVR?usp=drive_link"
          }
        >
          <button className="text-sm mt-3">Dataset →</button>
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-neutral-800 text-base">
          Problem statement 03:
        </h2>
        <p className="text-sm leading-7 mt-3">
          <span className="underline">Disaster or Not? :</span> Twitter has
          emerged as a vital platform for communication during emergencies. The
          widespread use of smartphones allows individuals to report emergencies
          as they happen in real time. Consequently, an increasing number of
          organisations, including disaster relief agencies and news outlets,
          are showing interest in systematically tracking Twitter. However,
          determining whether someone&apos;s posts genuinely indicate a disaster
          can often be challenging.
        </p>
        <Link
          href={
            "https://drive.google.com/drive/folders/1TVgow_mdKvINADFW326Anlarvl7XzlVR?usp=drive_link"
          }
        >
          <button className="text-sm mt-3">Dataset →</button>
        </Link>
      </div>

      <div className="mt-16">
        <Link
          className="bg-black text-white py-3 px-4 rounded text-sm"
          href="https://annimukherjee.notion.site/Konnexions-ML-Hackathon-d6d02a6e59ff4284bb8ef9fe8b4aed3e"
        >
          Click here for a detailed information
        </Link>
      </div>
    </div>
  );
}

export default Kernelkombat;
