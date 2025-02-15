import React from 'react';
import MagnetLines from './reactBits/MagnetLines';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="relative scroll-smooth mt-12">
      {/* Full-Screen Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1, // Ensures background stays behind content
          overflow: 'hidden',
          
        }}
      >
        <MagnetLines
          rows={10}
          columns={14}
          containerSize="100vmin"
          lineColor="gray"
          lineWidth="0.7vmin"
          lineHeight="5vmin"
          baseAngle={0}
          style={{
            margin: '0 auto',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col items-center justify-center mt-72 text-white text-center ">
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 ">Welcome, To The <br /> <span className="text-emerald-500 underline">

          AI-1O1-CodeReviewer
          </span> 
           </h1>
          <span >🚀</span>
        <p className="text-lg md:text-xl pb-8 text-black">
        where your journey towards impeccable code quality begins.
        </p>
        <Link to={'/editor'}>
        <button className="px-8 py-3 mt-4 bg-black font-bold text-xl hover:bg-gray-500 transition-colors rounded">
          Start Code Review 🚀
        </button>
        </Link>
      </div>
      <h2 className='mt-44 flex items-center justify-center'>Made With 🤍 by Ankit Sikeriya</h2>
    </div>
  );
};

export default Home;
