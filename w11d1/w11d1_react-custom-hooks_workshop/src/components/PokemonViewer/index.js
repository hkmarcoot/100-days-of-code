import { useFetch } from "../../hooks/useFetch.js";

function PokemonViewer() {
  const { id, data, handleChange } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/`
  );

  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={handleChange} value={id} />
      {data && <p>{data.name}</p>}
    </section>
  );
}

export default PokemonViewer;
