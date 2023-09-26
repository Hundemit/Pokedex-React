import React, { Component } from "react";

type SearchBarButtonProps = {
  clicker: () => void; // Diese Funktion gibt nichts zurück und nimmt keine Argumente an
};
const SearchBarButton: React.FC<SearchBarButtonProps> = (props) => {
  return (
    <>
      <button
        onClick={props.clicker}
        className="w-full md:w-auto max-w-md flex items-center pl-3 pr-20 py-2 gap-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <div className="pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Search...</p>
      </button>
    </>
  );
};

export default SearchBarButton;
