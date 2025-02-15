import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          max-w-full mx-auto
          flex items-center
          justify-between
          px-12 py-4
          bg-zinc-600/4   /* Darker, more opaque background */
          backdrop-blur-md
          border-b border-white/30
          rounded-b-lg
        "
      >
        {/* Logo / Brand Name */}
        <div className="text-black font-bold text-xl">
        AI-1O1-codeReviewer 💥🚀
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-16 text-black text-xl font-semibold">
          <Link to={'/'}>
          <li className="hover:underline cursor-pointer">
            🏠Home
            </li>
          </Link>
          <Link to={'/about'}>

          <li className="hover:underline cursor-pointer">🕵️‍♀️About</li>
          </Link>
          
        </ul>

        
        
      </div>
    </nav>
  );
};

export default Nav;
