
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg'; 

const Header = () => {
  return (
    <header className="bg-white-600 text-blue-700 p-1 shadow-md flex items-center">
      <span><Image src={logo} alt="Logo" width={50} height={40} /></span>
      <h1 className="text-xl font-bold ml-2">Mental Health Support</h1>
    </header>
  );
};

export default Header;
