import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" m-2 px-5 py-2 bg-slate-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
