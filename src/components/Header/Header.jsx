// import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <img
        src="/logo.svg"
        className="w-[154px] h-[33.97px]"
        alt="Quickit Logo"
      />
      <div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact us
          </a>
        </div>
      </div>
      <button className="bg-white-color text-black px-4 py-2 rounded-full icon:true">
        Get in Touch
      </button>
    </div>
  );
};

export { Header };
