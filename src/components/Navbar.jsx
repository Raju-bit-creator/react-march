import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductContext from "../context/ProductContext";

const Navbar = ({ title }) => {
  const context = useContext(ProductContext);
  const {
    state: { cart },
  } = context;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((i) => i + 1);
    console.log("count", count);
  };
  console.log("title", title);
  return (
    <>
      <div className="bg-orange-500 md:bg-green-500 lg:bg-black px-4 sticky top-0 absolute z-111 md:px-20 lg:px-10 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl text-white font-bold">{title}</h2>
          </div>
          <div className="md:flex hidden items-center gap-4">
            <ul className="flex gap-4">
              <Link to="/">
                <li className="text-white">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-white">About</li>
              </Link>
              <Link to="/products">
                <li className="text-white">Products</li>
              </Link>
              <Link to="/contact">
                <li className="text-white">Contact</li>
              </Link>
            </ul>
            <div className="relative flex items-center gap-0.5">
              <FaShoppingCart className="text-white" />
              <span className="inline-flex -mt-[16px] items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">
                {cart.length}
              </span>
            </div>
            <Link to="/login">
              <button
                onClick={handleClick}
                className="text-white border border-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              command="show-modal"
              commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <el-dialog>
          <dialog
            id="mobile-menu"
            className="backdrop:bg-transparent lg:hidden"
          >
            <div tabindex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    command="close"
                    commandfor="mobile-menu"
                    className="-m-2.5 rounded-md p-2.5 text-gray-200"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Product
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Marketplace
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </div>
    </>
  );
};

export default Navbar;
