import React, { useRef, useState } from 'react';
import Logo from '../assets/Logo.png';
import { FaSearch } from 'react-icons/fa';
import Filters from './Filters';

const NavBar = ({ func, dataFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };

  function searchfun() {
    func.srch(inputRef.current.value);
  }


  const handleInputChange = () => {
    const value = inputRef.current.value.trim();
    if (value !== '') {
      searchfun();
    }
  };

  return (
    <div
      className="navbar shadow-md bg-[var(--color6)] text-amber-50 duration-500 z-40 sm:sticky top-0"
    >
      <div className="py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              SolvroCocktails
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="
                  w-[200px]
                  group-hover:w-[300px]
                  transition-all 
                  duration-300 
                  rounded-full 
                  border border-[var(--color4)]
                  px-3 
                  py-1 
                  focus:outline-none 
                  focus:border-[var(--color2)]
                  bg-[var(--color2)]
                  text-[var(--color6)]
                  shadow-sm
                "
              
                onChange={handleInputChange}
              />
              <FaSearch
                className="
                  text-[var(--color6)]
                  group-hover:text-[var(--color4)]
                  absolute 
                  top-1/2 
                  -translate-y-1/2 
                  right-3
                "
              />
            </div>

   
            <button
              onClick={openModal}
              className="
                bg-[var(--color4)]
                hover:bg-[var(--color3)]
                transition-colors 
                duration-300 
                cursor-pointer 
                py-1 
                px-4 
                rounded-full 
                flex 
                items-center 
                gap-2 
                shadow-sm
              "
            >
              <span className="hidden sm:inline-block text-white font-bold">
                Filter
              </span>
              
            </button>
            <Filters open={isModalOpen} onClose={closeModal} onSelect={func.fltr} dataFilter={dataFilter}></Filters>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[var(--color4)] text-[var(--color6)] h-[20px]"></div>
    </div>
  );
};

export default NavBar;
