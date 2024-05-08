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
  ];
  return (
    <div className="flex">
      {list.map((category) => (
        <Button
          key={category}
          name={category}
        />
      ))}
    </div>
  );
};

export default ButtonList;
