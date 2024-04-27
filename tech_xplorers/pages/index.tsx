// pages/index.tsx

import React from 'react';
import ChatInterface from '@/components/ChatInterface';
//import '@/public/styles.css' ;

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Chatbot Interface</h1>
      <ChatInterface />
    </div>
  );
};

export default HomePage;
