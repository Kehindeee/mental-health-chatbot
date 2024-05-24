// components/Chatbot.tsx
import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput('');

      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { user: false, text: `Echo: ${input}` }]);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Mental Health Support</h2>
      </div>
      <div className="flex-grow p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.user ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
