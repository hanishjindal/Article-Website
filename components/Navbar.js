import React from "react";
import Link from "next/link";
import Router from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div
            className="flex-shrink-0 flex items-center"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="/">
              {/* <img className="h-8 w-auto" src="/next.svg" alt="Logo" /> */}
              <h1 className="h-8 w-auto text-3xl font-semibold">Article Co.</h1>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              href="/article"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              About
            </Link>
            {/* <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              Contact
            </Link> */}
          </div>
          <div className="mr-2 flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <form
              className="flex w-full max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                const searchQuery = e.target.search.value;
                e.target.search.value = "";
                Router.push(`/article?search=${searchQuery}`);
              }}
            >
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <input
                  id="search"
                  className="block w-full rounded-md bg-white border-2 p-2 focus:border-gray-500 focus:bg-white focus:ring-0 placeholder-gray-500 sm:text-sm"
                  type="search"
                  placeholder="Search articles"
                />
              </div>
            </form>
            <button className="ml-3 flex-shrink-0 px-4 py-2 border rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              <Link href="/login">Log in</Link>
            </button>
            <button className="ml-3 flex-shrink-0 px-4 py-2 border rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              <Link href="/dashboard">Dashboard</Link>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1" onClick={toggle}>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/article"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
        <form
          className="px-4 pt-4 pb-3 border-t border-gray-200"
          onSubmit={(e) => {
            e.preventDefault();
            const searchQuery = e.target.search.value;
            e.target.search.value = "";
            toggle();
            Router.push(`/article?search=${searchQuery}`);
          }}
        >
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
            <input
              id="search"
              className="block w-full rounded-md bg-white border-2 focus:border-gray-500 focus:bg-white focus:ring-0 placeholder-gray-500 sm:text-sm p-2"
              type="search"
              placeholder="Search articles"
            />
          </div>
        </form>
        {/* <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={toggle}
          >
            <Link href="/login">Log in</Link>
          </button>
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
