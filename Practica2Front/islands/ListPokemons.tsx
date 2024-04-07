import { FunctionComponent } from "preact";
import { Pokemon } from "../Pokemon.ts";
import { useEffect, useState } from "preact/hooks";

const ListPokemons: FunctionComponent = () => {
  const [pokemonLi, setPokemonL] = useState<Pokemon[]>([])
  useEffect(() => {
    const fpokeL = async () => {
      const response = await fetch("/api/API", {
        method: "GET"
      });
      const pL = await response.json();
      setPokemonL(pL)
    }
    fpokeL()
  }, [])

  return (
    <div class="pokemon-list">
      {pokemonLi.map((pokemon) => (
        <a class="pokemon-container" href={`/Pokemonn/${pokemon.name}`}>
          <h2 class="pokemon-name">{pokemon.name}</h2>
          <img class="pokemon-image" src={pokemon.image} alt={pokemon.name}/>
          <audio class="pokemon-audio" controls>
            <source src={pokemon.sound} type="audio/mpeg"/>
          </audio>
        </a>
      ))}
    </div>
);

};

export default ListPokemons;