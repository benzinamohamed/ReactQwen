"use client";
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatAi: React.FC = () => {
    const [messages, setMessages] = React.useState([
        { text: "Hello! How can I assist you today?", sender: "ai" },
        { text: "I need help styling this chat.", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "ai" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
        { text: "Sure! Here’s how you can do it...", sender: "user" },
   
    ]);

    return (
        <div className='w-full h-[90%] flex flex-col justify-end md:ml-6 px-4'>
            {/* Chat Messages Container */}
            <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar font-inter">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`max-w-[70%] w-fit p-3 rounded-xl text-lg shadow-md break-words ${
                            msg.sender === 'user' 
                            ? 'bg-primary text-secondary  mb-2 self-end'  // User messages (right)
                            : 'bg-secondary text-primary  mb-2 self-start' // AI messages (left)
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Section */}
            <div className='w-full flex items-center gap-4 p-4 bg-gray-300 rounded-xl shadow-md'>
                <Textarea 
                    placeholder="Type something..."
                    className="no-scrollbar focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0  resize-none border-2  rounded-xl md:text-lg"
                />
                <SendHorizontal className='cursor-pointer text-primary hover:text-secondary transition' />
            </div>
        </div>
    );
}

export default ChatAi;
