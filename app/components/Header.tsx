"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { openCart } from "@/redux/features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="  bg-white">
      <div className="max-w-[85rem] flex items-center mx-auto py-2 justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="4.5" fill="#4A5568" />
              <path
                d="M6 7.2H7.2L8.4 15.6H15.6"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.4 9.6H16.8L15.6 13.2H9.6"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10.2" cy="18" r="1.2" fill="white" />
              <circle cx="15" cy="18" r="1.2" fill="white" />
              <path
                d="M16.8 13.2L19.2 10.8"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.2 10.8L21 12.6"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="ml-5 relative border rounded-md  bg-gray-100 flex items-center px-3">
            <Search size={14} className=" " />
            <input
              type="text"
              placeholder="Search for product"
              className="text-sm px-2 py-1 w-[20rem] bg-transparent ml-2 rounded-md outline-0  placeholder:text-xs"
            />
          </div>
        </div>

        <nav className="flex space-x-4">
          <Link href="/products" className="text-gray-700 hover:text-sky-600 ">
            All
          </Link>
          <Link href="/shirts" className="text-gray-700 hover:text-gray-600">
            Shirts
          </Link>
        </nav>
        <div>
          <button
            onClick={() => dispatch(openCart())}
            className="bg-gray-100 rounded p-1 size-[2rem] grid place-items-center"
          >
            <ShoppingBag size={15} className="text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
