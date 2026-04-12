import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((i) => i + 1);
    console.log("count", count);
  };
  console.log("title", title);
  return (
    <>
      {/* <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                  className="h-8 w-auto"
                />
              </a>
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
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokelinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm/6 font-semibold text-white">
                Product
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Features
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Marketplace
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Company
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-white">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <el-dialog>
            <dialog
              id="mobile-menu"
              className="backdrop:bg-transparent lg:hidden"
            >
              <div tabIndex="0" className="fixed inset-0 focus:outline-none">
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
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6"
                      >
                        <path
                          d="M6 18 18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            {/* <div
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
              ></div> */}
      <div className="bg-orange-500 md:bg-green-500 lg:bg-black px-4 sticky top-0 absolute z-111 md:px-20 lg:px-10 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl text-white font-bold">{title}</h2>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4">
              <Link to="/">
                <li className="text-white">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-white">About</li>
              </Link>
              <Link to="/contact">
                <li className="text-white">Contact</li>
              </Link>
            </ul>
            <Link to="/login">
              <button
                onClick={handleClick}
                className="text-white border border-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
