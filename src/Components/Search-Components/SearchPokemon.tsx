import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ServicePokemonListData from "../../Service-Pokemon-List-Data";
import { log } from "console";

type SearchPokemonProps = {
  closeModal: () => void; // Diese Funktion gibt nichts zurück und nimmt keine Argumente an
  pokemon: any;
};

const SearchPokemon: React.FC<SearchPokemonProps> = (props) => {
  // State variable for storing Pokemon data.
  const [pokemon, setPokemon] = useState<any>();

  // State variable for handling the loading state, initially true.
  const [loading, setLoading] = useState(true);

  // useEffect hook to perform side effect when the component mounts.
  useEffect(() => {
    // Call fetchMorePokemonData from ServicePokemonListData with pokemon prop as parameter.
    ServicePokemonListData.fetchMorePokemonData(props.pokemon)
      .then((pokemon) => {
        // Log the fetched pokemon data and update the pokemon and loading state variables.
        setPokemon(pokemon);
        setLoading(false);
      })
      .catch(); // Handle any errors occurred during the fetch.
  }, []); // Empty dependency array means the effect will only run once after the initial render.

  return (
    <>
      {!loading && (
        <Link
          to={"/pokedex/1/pokemon/" + pokemon.id}
          onClick={props.closeModal}
          className=" w-full flex gap-4 bg-slate-100 dark:bg-slate-700   items-center pl-6 p-2 rounded-xl"
        >
          <img
            src={pokemon.sprites.front_default}
            className=" w-14 h-14 rounded-full object-cover"
            alt="Flowbite Logo"
          />

          <p className="text-base font-medium  text-gray-900 dark:text-white h-fit">
            {" "}
            {pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}
          </p>
        </Link>
      )}
    </>
  );
};

export default SearchPokemon;
