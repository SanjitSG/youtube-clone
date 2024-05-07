import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Coding",
    "News",
    "Dance",
    "Gym",
    "Gaming",
    "Racing",
    "Cooking",
    "Programming",
    "Birds",
    "Europe",
    "Camera",
    // "Boxing",
    // "Chess",
    // "Waterfall",
    // "React",
    // "Health",
  ];
  return (
    <div className="flex">
      {list.map((category) => (
        <Button name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
