import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: any;
  site: number;
}

function PokemonCard(props: PokemonCardProps) {
  const { pokemon, site } = props;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div>
        <img className=" rounded-t-lg  mx-auto  h-32 mt-5 object-cover	" src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h5>
        <Link
          to={"/pokemon/" + pokemon.id}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded bg-blue-50  text-blue-700">
          <span>Info</span>
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PokemonCard;
