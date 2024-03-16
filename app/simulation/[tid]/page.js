import React from "react";

function Page({ params: { tid } }) {
  return (
    <div>
      <h1>Simulation Page</h1>
      <p>tid: {tid}</p>
    </div>
  );
}

export default Page;
