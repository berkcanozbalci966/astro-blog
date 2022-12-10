import React from "react";

export const MyButton = () => {
  return (
    <button className="btn btn-primary" onClick={() => console.log("test")}>
      {" "}
      Yes
    </button>
  );
};
