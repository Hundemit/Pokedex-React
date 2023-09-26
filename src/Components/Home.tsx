import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-4">
      <div className=" mb-8 flex justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:text-white ring-gray-900/10 dark:ring-gray-700 dark:hover:ring-gray-300 hover:ring-gray-900/20">
          Here are more of my projects.{" "}
          <a
            href="https://janhindemit.de/myprojects/"
            target="_blank"
            className="font-semibold text-blue-600"
          >
            <span className="absolute inset-0" aria-hidden="true"></span>Link{" "}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl text-gray-900 dark:text-white">
          A simple and easy Pokédex.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
          The project was built using React, TailwindCSS and the PokéAPI.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/pokedex/1"}
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Pokédex
          </Link>
          <a
            href="https://janhindemit.de/"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            About me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
