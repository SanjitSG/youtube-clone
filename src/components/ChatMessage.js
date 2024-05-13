import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-5 border-b py-2">
      <i class="fa-solid fa-circle-user"></i>
      <span className="font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
