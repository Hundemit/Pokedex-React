import React, { Component, Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SearchPokemon from "./SearchPokemon";
import * as ServicePokemonListData from "../../Service-Pokemon-List-Data";

// Define the type for the properties passed to the SearchBar component
type SearchBarProps = {
  isOpen: boolean; // A boolean indicating whether the search bar is open or not
  closeModal: () => void; // A function that takes no arguments and returns nothing, used to close the modal
  openModal: () => void; // A function that takes no arguments and returns nothing, used to open the modal
};

// Define the SearchBar component, a functional component in React
const SearchBar: React.FC<SearchBarProps> = (props) => {
  // Define a state variable, 'pokemons', initialized as an empty array,
  // and a function, 'setPokemons', to update it.
  const [pokemons, setPokemons] = useState([] as any[]);

  // Define a state variable, 'searchText', initialized as an empty string,
  // and a function, 'setSearchText', to update it.
  const [searchText, setSearchText] = useState("");

  // Define a function to handle changes to the search input
  // It updates the 'searchText' state variable with the input’s current value
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // Define an effect hook to fetch Pokemon list data when the component mounts
  useEffect(() => {
    // Call the 'fetchPokemonsListData' method from 'ServicePokemonListData',
    // passing '1500' as the limit and '0' as the offset.
    ServicePokemonListData.fetchPokemonsListData(1500, 0)
      .then((promise) => {
        // Update the 'pokemons' state variable with the returned data
        setPokemons(promise);
      })
      // Catch any errors that occur during the fetch operation
      .catch((error) => console.error("Error fetching Pokémon list data:", error));
  }, []); // Pass an empty dependency array to run the effect once after initial render

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full h-screen justify-center md:items-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* WINDOW */}
                <Dialog.Panel className="h-4/5 m-8 p-6 flex gap-4 flex-col border border-gray-200 dark:border-gray-700 w-full  max-w-xl  transform overflow-hidden rounded-2xl  text-left shadow-xl transition-all  text-gray-900 dark:text-white bg-white dark:bg-gray-800  ">
                  <div className=" flex gap-2">
                    <div className="relative md:block w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                      <input
                        type="text"
                        id="search-navbar"
                        onChange={handleSearchChange}
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                      />
                    </div>
                    <button
                      onClick={props.closeModal}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-[20px] h-[20px] "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                  </div>

                  <div className=" flex flex-col gap-4 overflow-y-scroll">
                    {pokemons
                      .filter((pokemon: any) => {
                        // Wenn es keinen Suchtext gibt, zeigen Sie alle Pokémon an.
                        if (!searchText.trim()) return true;

                        // Andernfalls überprüfen Sie, ob der Pokémon-Name den Suchtext enthält.
                        return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
                      })
                      .slice(0, 50)
                      .map((pokemon: any) => {
                        return (
                          <SearchPokemon key={pokemon.name} pokemon={pokemon} closeModal={props.closeModal} />
                        );
                      })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchBar;
