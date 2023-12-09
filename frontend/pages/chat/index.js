import React, { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", sender: "other" },
    { id: 2, text: "Hello! How can I help you?", sender: "other" },
    // Add more initial messages as needed
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage.trim(),
        sender: "me",
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
        <h2 className="flex place-items-center justify-center bg-white text-yellow-400 text-lg ">PUSH REALTIME CHAT</h2>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`${
                message.sender === "me"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-800"
              } p-2 rounded-lg shadow max-w-xs`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-gray-200 p-4">
        <input
          type="text"

          className="flex-1 text-black  mr-2 py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-yellow-300 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
