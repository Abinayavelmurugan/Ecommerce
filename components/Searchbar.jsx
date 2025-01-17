import React, { useContext,useEffect, useState } from 'react';
import { ShopContext } from '../context/ShpoContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

//only visible for collections page
const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible]=useState(false);
  const location = useLocation();  //uselocation is used to get the path location of the url example collections
useEffect(() => {
  if(location.pathname.includes('collection')){
    setVisible(true);
  } else {
    setVisible(false);
  }
}, [location]); // Corrected the typo here


  return showSearch && visible? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent text-sm"
        />
        {/* Clear Search */}
        {search && (
          <img
            onClick={() => setSearch('')}
            className="inline w-3 h-3 cursor-pointer ml-2"
            src={assets.cross_icon}
            alt="Clear Search"
          />
        )}
      </div>
      {/* Close Searchbar */}
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer mt-2 ml-6 pb-4"
        src={assets.cross_icon}
        alt="Close Searchbar"
      />
    </div>
  ) : null;
};

export default Searchbar;
