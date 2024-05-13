import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      //Api poling
      console.log("Api Poling");
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ml-2 p-2 w-2/4 h-[500px] border bg-slate-100 rounded-sm shadow-md">
      <ChatMessage
        name={"Sanjit Gawade"}
        message={"Woo!! this is live chat, Big Fan 🎉 "}
      />
    </div>
  );
};

export default LiveChat;
