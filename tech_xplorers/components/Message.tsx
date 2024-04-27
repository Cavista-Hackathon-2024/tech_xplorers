// Message.tsx
import React from 'react';

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message: React.FC<MessageProps> = ({ content, isUserMessage }) => {
  // Determine the CSS classes based on whether it's a user message or a bot message
  const messageClass = isUserMessage ? 'bg-blue-200 text-black' : 'bg-gray-200 text-black';
  const containerClass = isUserMessage ? 'flex justify-end' : 'flex justify-start';

  return (
    <div className={containerClass}>
      <div className={`rounded-lg p-2 max-w-xs ${messageClass}`}>
        {content}
      </div>
    </div>
  );
};

export default Message;
