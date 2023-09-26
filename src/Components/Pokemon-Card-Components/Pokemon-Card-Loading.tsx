import React, { Component } from "react";
import { Link } from "react-router-dom";

class PokemonCardLoading extends Component {
  state = {};
  render() {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full  mx-auto w-32  h-32 mt-5  object-cover"></div>
        </div>
        <div className="p-5">
          <div className="mb-2 animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full  mx-auto w-28  h-8  object-cover"></div>

          <button className="animate-pulse w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded bg-blue-50  text-blue-400 h-9"></button>
        </div>
      </div>
    );
  }
}

export default PokemonCardLoading;
