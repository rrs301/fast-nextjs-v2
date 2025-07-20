'use client';

import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import EmptyState from './_components/EmptyState';
import axios from 'axios';

type Message = 
  | { content: string; role: 'user'; type: 'text' }
  | { content: string; role: 'ai'; type: 'text' };

function AiChat() {
  const [userInput, setUserInput] = useState('');
  const [messageList, setMessageList] = useState<Message[]>([]);

  const onSend = async () => {
    if (!userInput.trim()) return;
    setMessageList((prev) => [...prev, { content: userInput, role: 'user', type: 'text' }]);
    setUserInput('');
    try {
      const { data } = await axios.post('/api/ai-career-chat-agent', { userInput });
      setMessageList((prev) => [...prev, { content: data?.output?.[0], role: 'ai', type: 'text' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48">
      <div className="flex items-center justify-between gap-8">
        <h2>AI Career Q&A Chat</h2>
        <button>+ New Chat</button>
      </div>
      <div className="flex flex-col h-[80vh]">
        <div className="mt-5">
          <EmptyState />
          {messageList.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`bg-${message.role === 'user' ? 'secondary' : 'primary'} p-4 rounded-lg max-w-[50%]`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-between items-center gap-6">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type Here"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSend();
              }
            }}
          />
          <button onClick={onSend}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiChat;

