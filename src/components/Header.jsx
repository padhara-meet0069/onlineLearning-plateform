import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-red-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
     
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-stone-800 hover:duration-300">LearnOnline</Link>
        </div>

        <ul className={`hidden md:flex space-x-6`}>
          <li>
            <Link to="/" className="hover:text-stone-900 hover:ease-in-out hover:duration-300 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/catalog" className="hover:text-stone-900 hover:ease-in-out hover:duration-300 hover:underline">Catalog</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-stone-900 hover:ease-in-out hover:duration-300 hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="/course/1/lesson" className="hover:text-stone-900 hover:ease-in-out hover:duration-300 hover:underline">Lesson Player</Link>
          </li>
        </ul>

    
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

    
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 p-4 bg-red-800">
          <li>
            <Link to="/" className="block hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/catalog" className="block hover:text-blue-400">Catalog</Link>
          </li>
          <li>
            <Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link>
          </li>
          <li>
            <Link to="/course/1/lesson" className="block hover:text-blue-400">Lesson Player</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
