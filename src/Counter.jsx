import React from "react";
export const Counter = () => {
  const increase = () => {};
  return (
    <>
      <h1>Coutner</h1>
      <button className="btn btn-primary" onClick={increase}>
        Increase
      </button>
    </>
  );
};
