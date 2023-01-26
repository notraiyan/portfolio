import axios from "axios";
import React, { useState } from "react";

interface conversationProps {
  message: string;
  type: string;
}

function Chat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<conversationProps[]>([]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Send the message to the OpenAI API and update the conversation state
    // const response = await axios.post(
    //   "https://api.openai.com/v1/engines/davinci/completions",
    //   {
    //     prompt: message,
    //     model: "text-davinci-002",
    //     max_tokens: 50,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: process.env.OPENAI_API_KEY,
    //     },
    //   }
    // );
    // setConversation([
    //   ...conversation,
    //   { message: message, type: "user" },
    //   { message: response.data.choices[0].text, type: "bot" },
    // ]);
    // setMessage("");
  };

  return (
    <div>
      <div>
        {conversation.map((chat, index) => (
          <div
            key={index}
            className={`${
              chat.type === "user" ? "bg-gray-200" : "bg-blue-200"
            } p-2 rounded`}
          >
            {chat.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
