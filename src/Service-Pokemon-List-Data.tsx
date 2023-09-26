import React, { Component } from "react";

// Function to fetch list of Pokemon along with their image data
export async function fetchPokemonsListImgData(limitNumber: number, offsetNumber: number): Promise<any[]> {
  // Making API request to fetch Pokemon
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limitNumber + "&offset=" + offsetNumber
  );

  const data = await response.json(); // Parsing the JSON data

  const updatedPokemons = await fetchMorePokemonsData(data.results); // Fetching more detailed data for each Pokemon
  return updatedPokemons;
}

// Function to determine how many pages are needed based on the number of Pokemon per page
export async function checkHowManySites(pokemonPersite: number) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  var count = data.count; // Total number of Pokemon
  count = Math.ceil(count / pokemonPersite); // Calculating number of pages needed

  return count;
}

// Function to fetch more detailed data for each Pokemon in the provided list
export async function fetchMorePokemonsData(pokemons: any[]): Promise<any[]> {
  const promises = pokemons.map((pokemon) => {
    return fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        // Check if main data is present
        if (data && data.id) {
          return {
            ...pokemon,
            id: data.id,
            sprites: {
              front_default:
                data.sprites && data.sprites.front_default
                  ? data.sprites.front_default
                  : "https://janhindemit.de/wp-content/themes/PortfolioPage/Assests/pokedex-app/assets/img/pokeball.png",
              // You can add other properties here if desired
            },
          };
        } else {
          // Decide how to handle Pokemon that do not have the expected data
          return pokemon; // This returns the original Pokemon without any modifications
        }
      });
  });

  const updatedPokemons = await Promise.all(promises); // Waiting for all promises to resolve
  return updatedPokemons;
}

// Function to fetch data for a single Pokemon using its ID
export async function fetchPokemonData(pokemonId: string): Promise<any> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId);
  const data = await response.json();
  return data;
}

// Function to fetch a list of Pokemon without their detailed data
export async function fetchPokemonsListData(limitNumber: number, offsetNumber: number): Promise<any[]> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limitNumber + "&offset=" + offsetNumber
  );
  const data = await response.json();
  return data.results; // Returning only the list of Pokemon
}

// Function to fetch more detailed data for a single Pokemon in the provided list
export async function fetchMorePokemonData(pokemon: any) {
  const response = await fetch(pokemon.url);
  const data = await response.json();

  pokemon.id = data.id;
  pokemon.sprites = {
    front_default:
      data.sprites && data.sprites.front_default
        ? data.sprites.front_default
        : " https://janhindemit.de/wp-content/themes/PortfolioPage/Assests/pokedex-app/assets/img/pokeball.png",
    // You can add other properties here if desired
  };

  return pokemon;
}
