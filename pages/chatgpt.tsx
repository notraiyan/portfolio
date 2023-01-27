import Head from "next/head";
import { useState } from "react";
import { FaRobot, FaUserTie } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ReactHtmlParser from "react-html-parser";

interface conversationProps {
  message: string;
  type: string;
}

export default function Home() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState<conversationProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: { preventDefault: () => void }) {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });

      const data = await response.json();
      if (response.status !== 200) {
        setConversation([
          { message: question, type: "user" },
          { message: "too much load, try again later", type: "bot" },
          ...conversation,
        ]);
        setQuestion("");
      }
      if (response.status === 200) {
        setConversation([
          { message: question, type: "user" },
          { message: data.result, type: "bot" },
          ...conversation,
        ]);
        setQuestion("");
      }
      setQuestion("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <>
      {loading && (
        // <div
        //   className="openLoader w-12 h-12 rounded-full animate-spin
        //           border-y border-solid border-teal-500 border-t-transparent shadow-md"
        // />
        <div id="cover-spin"></div>
      )}
      <Head>
        <title>OpenAI Demo</title>
      </Head>

      <h2 className="text-5xl py-2 text-cyan-600 font-medium dark:text-cyan-400 md:text-6xl text-center mt-10">
        <Typewriter
          options={{
            strings: ["Ask me anything!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="p-10 gap-5 mt-20 width-full shadow-lg">
        <form
          className="width-full h-40 text-center rounded overflow-hidden"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="question"
            placeholder="Enter your message here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-black px-4 py-2 border-none rounded-md max-w-2xl w-full"
          />
          <input
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer disabled:cursor-default sm:mt-5"
            type="submit"
            value="Generate answer"
            disabled={loading}
          />
        </form>
        <div className="p-20 text-black width-full rounded overflow-hidden shadow-lg">
          {conversation.map((chat, index) => (
            <div
              key={index}
              className={`${
                chat.type === "user" ? "bg-gray-200" : "bg-blue-200"
              } p-2 first:rounded-t-lg last:rounded-b-lg flex`}
            >
              <span className="mr-5">
                {chat.type === "user" ? (
                  <FaUserTie size={24} />
                ) : (
                  <FaRobot size={24} />
                )}
              </span>
              <span>
                <text>{ReactHtmlParser(chat.message)}</text>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
