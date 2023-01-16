import { useState } from 'react';
import React from 'react';

const Navbar = () => {
    return (
      
      <>
        <head>
          <link href="/dist/output.css" rel="stylesheet" />
        </head>
        <header class="bg-gray-900 text-white p-4">
          <div class="container mx-auto flex items-center justify-                between">
            <div class="text-2xl font-medium">My Website</div>
            <div class="relative">
              <button class="text-white-500 focus:outline-none">
                <svg class="h-6 w-6 fill-current"                 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
              <div class="absolute right-0 z-10 py-2 mt-2 bg-gray-900                 rounded-lg hidden">
                <a href="#" class="block px-4 py-2 text-gray-400                         hover:bg-gray-800">Home</a>
                <a href="#" class="block px-4 py-2 text-gray-400                         hover:bg-gray-800">About</a>
                <a href="#" class="block px-4 py-2 text-gray-400                         hover:bg-gray-800">Contact</a>
              </div>
            </div>
          </div>
        </header>
        
      </>
    );
};

export default Navbar;
