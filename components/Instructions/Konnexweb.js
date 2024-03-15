import { Icon } from "@iconify/react";
import { Snippet } from "next/font/google";
import React from "react";

function Konnexweb() {
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
          Parameters :
        </h2>
        <p className="text-sm leading-7 mt-3 bg-white px-6 rounded-md border py-3 w-full max-w-3xl font-mono"></p>
      </div>
    </div>
  );
}

export default Konnexweb;
