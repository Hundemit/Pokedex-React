import PokemonCard from "./Pokemon-Card";
import * as ServicePokemonListData from "../../Service-Pokemon-List-Data";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PokemonCardLoading from "./Pokemon-Card-Loading";
import { log } from "console";
import { useNavigate } from "react-router-dom";

function PokemonCardContainer() {
  // State variable for storing array of pokemons.
  const [pokemons, setPokemons] = useState([] as any[]);

  // State variable for loading status, initialized as true.
  const [loading, setLoading] = useState<boolean>(true);

  // State variables for current site and maximum sites.
  const [sites, setSites] = useState(Number);
  const [maxSites, setMaxSites] = useState(Number);

  // Get 'site' parameter from the URL.
  const { site } = useParams();
  const pokemonPersite = 20; // Define number of pokemons per site.

  // Hook to navigate to different URLs.
  const navigate = useNavigate();

  // Effect to check max sites and set 'sites' state based on URL parameter 'site'.
  useEffect(() => {
    ServicePokemonListData.checkHowManySites(pokemonPersite)
      .then((mS) => {
        setMaxSites(mS);
        if (parseInt(site || "0") > mS) {
          navigate(`/pokedex/` + mS);
          setSites(Math.max(mS, 1));
        } else {
          setSites(Math.max(parseInt(site || "0"), 1));
        }
      })
      .then(() => {});
  }, [site]);

  // Effect to fetch and set pokemons data for the current site, and set loading to false.
  useEffect(() => {
    ServicePokemonListData.fetchPokemonsListImgData(pokemonPersite, (sites - 1) * pokemonPersite)
      .then((promise) => {
        setPokemons(promise);
        setLoading(false);
      })
      .catch();
  }, [sites]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 ">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Pokémon</h1>
      </div>

      <section aria-labelledby="products-heading" className="md:pb-12 pb-6 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {loading && (
            <>
              {Array(20)
                .fill(null)
                .map((_, index) => (
                  <PokemonCardLoading key={index} />
                ))}
            </>
          )}
          {!loading && (
            <>
              {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} site={sites} pokemon={pokemon}></PokemonCard>
              ))}
            </>
          )}
        </div>
      </section>

      <div className="w-full">
        <div className="flex justify-center gap-1 mx-auto mt-4">
          {sites === 1 && (
            <Link
              to="/pokedex/1"
              className="cursor-not-allowed inline-flex h-8 w-8 items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-700  dark:border-gray-700  dark:bg-gray-700 dark:text-white rtl:rotate-180">
              {" "}
              <span className="sr-only">Prev Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}

          {sites !== 1 && (
            <Link
              to={"/pokedex/" + (sites - 1)}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex h-8 w-8 items-center justify-center border text-gray-500 bg-white  border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rtl:rotate-180">
              <span className="sr-only">Prev Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}

          <div>
            <label htmlFor="PaginationPage" className="sr-only">
              Page
            </label>

            <div className="h-8 w-12 flex justify-center items-center  text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              <p className="text-sm font-bold">{sites}</p>
            </div>
          </div>

          {sites >= maxSites && (
            <Link
              to={"/pokedex/" + maxSites}
              className="cursor-not-allowed inline-flex h-8 w-8 items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-700  dark:border-gray-700  dark:bg-gray-700 dark:text-white rtl:rotate-180">
              <span className="sr-only">Next Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}

          {sites < maxSites && (
            <Link
              to={"/pokedex/" + (sites + 1)}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex h-8 w-8 items-center justify-center text-gray-500 bg-white border border-gray-300 rounded-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default PokemonCardContainer;
