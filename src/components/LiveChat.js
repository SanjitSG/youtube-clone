import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomSentenceGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      //Api poling
      dispatch(
        addMessage({
          name: randomNameGenerate(),
          message: randomSentenceGenerator(),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-2/4 h-[500px] border bg-slate-100 rounded-sm shadow-md overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage
            key={index}
            name={c.name}
            message={c.message}
          />
        ))}
      </div>
      <form
        className="w-2/4 p-2 m-2 border flex gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: randomNameGenerate(),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-full px-4 outline-none"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="border px-2 rounded-lg bg-red-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
