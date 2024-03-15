import { Icon } from "@iconify/react";
import React from "react";

function Konnexweb() {
  return (
    <div className="pt-7">
      <div className="text-sm bg-neutral-100 border-l-2 border-neutral-500 p-5 leading-7">
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
    </div>
  );
}

export default Konnexweb;
