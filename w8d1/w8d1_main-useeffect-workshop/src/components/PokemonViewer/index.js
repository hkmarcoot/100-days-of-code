import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function getPokemon() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    }
    getPokemon();
  }, [id]);

  return pokemon ? (
    <div className="pokemon-viewer">
      <h1>{id}</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></img>
    </div>
  ) : (
    <></>
  );
}

export default PokemonViewer;
