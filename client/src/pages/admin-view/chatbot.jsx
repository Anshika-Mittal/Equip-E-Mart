import { useState } from "react";

function chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center p-6 bg-gray-100">
      <h2 className="text-4xl font-semibold mb-4">Chatbot Insights</h2>

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">📊 Chatbot Performance</h3>
        <p className="mt-2">🤖 Negotiation Success Rate: 78%</p>
        <p>📬 Most Requested Discounts: 15%</p>
        <p>📉 Chatbot Performance Graph</p>
      </div>

      {/* Chat Interface */}
      <div className="w-full max-w-2xl bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">💬 Chat with the Bot</h3>
        <div className="h-64 overflow-y-auto border p-3 rounded-md bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>{msg.text}</span>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-1 border rounded-l-lg p-2"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default chatbot;