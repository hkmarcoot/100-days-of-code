import { useFetch } from "../../hooks/useFetch.js";
import { useAuth0 } from "@auth0/auth0-react";



function PokemonViewer() {
  const { isAuthenticated } = useAuth0();
  const { id, data, handleChange } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  console.log(data)
 
  return (
    isAuthenticated && (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={handleChange} value={id} />
      {data && <p>{data.name} </p>}
       <p>Stat score: {data.stats ? data.stats[0].base_stat: ''}</p>
      <img src= {data.sprites ? data.sprites.front_default : ''}alt= ""></img>
     
    </section>
    )
  );
}

export default PokemonViewer;
