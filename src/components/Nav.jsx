import React from "react";
import { FaHeadset, FaShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <nav className="box-border py-3  fixed w-full z-10 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5">
        <h1 className="text-xl font-bold">
          L<span className="text-primary">OG</span>O
        </h1>
        <div className="border-gray-700 border-[1px] box-border min-w-[250px] relative sm:block hidden">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for Products"
            className="text-[0.95em] px-3 py-1.5"
          />
          <button className="absolute bg-black text-white right-1 top-[50%] -translate-y-[50%] text-xs px-1.5 py-1.5">
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <FaHeadset />
            <div>
              <h3 className="text-sm">Support 24x7</h3>
              <h4 className="text-xs text-gray-500">+91123456789</h4>
            </div>
          </div>
          <button className="flex items-center gap-2 box-border border-gray-700 border-[1px] px-2 py-1.5">
            <FaShoppingCart />
            <h3 className="text-sm">Cart</h3>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
