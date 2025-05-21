import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TypBadges from "../TypBadges";
import { log } from "console";
import * as ServicePokemonListData from "../../Service-Pokemon-List-Data";

function PokemonDetails() {
  // State variable for storing Pokemon data, initialized as undefined.
  const [pokemon, setPokemon] = useState<any>();

  // State variable for loading status, initialized as true.
  const [loading, setLoading] = useState<boolean>(true);

  // Extracting 'id' and 'site' from the URL parameters.
  const { id, site } = useParams();

  // Effect to fetch and set Pokemon data based on 'id', and set loading to false once data is fetched.
  useEffect(() => {
    async function fetchPokemon() {
      // Await fetching Pokemon data and then set it to 'pokemon' state variable.
      await ServicePokemonListData.fetchPokemonData(id || "1").then((promise) => {
        setPokemon(promise);
        setLoading(false);
      });
    }

    // Invoke fetchPokemon to execute the fetch operation.
    fetchPokemon();
  }, [id]); // Dependency array includes 'id', so the effect will run when 'id' changes.

  return (
    <div className="min-h-[70vh] ">
      <div className="flex flex-col gap-10 md:mt-24 max-w-5xl mx-auto md:px-4">
        <Link
          to={"/pokedex/" + site}
          className="w-fit flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded-r md:rounded bg-blue-50  text-blue-700">
          <svg className="w-3.5 h-3.5  rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
          <span>Back</span>
        </Link>
        <div className=" flex flex-col items-center md:flex-row gap-20 justify-between  border rounded-xl mx-4 md:mx-0 bg-[#F5F5F5]">
          {/* PICTURE */}
          {loading && (
            <div className="w-80 h-80  flex justify-center items-center  object-contain">
              <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full h-64 w-64"></div>
            </div>
          )}
          {!loading && (
            <img
              src={pokemon && pokemon.sprites.front_default ? pokemon.sprites.front_default : " https://janhindemit.de/wp-content/themes/PortfolioPage/Assests/pokedex-app/assets/img/pokeball.png"}
              className="w-80 md:w-full object-contain"
              alt="Moin"
            />
          )}

          {/* DETAILS */}
          <div className="max-w-lg w-full px-4 ">
            <div className="px-4 sm:px-0">
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">{pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300">#{pokemon?.id}</span>
              </div>
              {/* TYP */}
              <div className="flex flex-wrap gap-2 mt-4">
                {!loading &&
                  pokemon.types.map((typo: any) => {
                    return <TypBadges text={typo.type.name} type={typo.type.name} />;
                  })}
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-300">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon?.height || 0) * 0.1).toFixed(2)} m</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon?.weight || 0) * 0.1).toFixed(2)} kg</dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Capability</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                    {pokemon?.abilities[0].ability.name.charAt(0).toUpperCase()}
                    {pokemon?.abilities[0].ability.name.slice(1)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
