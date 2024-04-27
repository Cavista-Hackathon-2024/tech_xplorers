// pages/index.tsx

import React from 'react';
import ChatInterface from '@/components/ChatInterface';
//import '@/public/styles.css' ;

const HomePage: React.FC = () => {
  return (
    <div className="container ml-0 mt-0 mr-0 mb-40 fixed w-full top-0 ">
		<header className='flex items-center p-10 bg-white w-full' >
			<div className='m-0 flex items-center align'>
			<a href="./"><img src="/CarePal.png" alt="CarePal logo" width={85} height={85} /></a>
			<b>CarePal</b>
			</div>
		</header>
      <ChatInterface />
    </div>
  );
};

export default HomePage;
