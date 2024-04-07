import { FunctionComponent } from "preact";

import { useState } from "preact/hooks";
import {JSX} from "preact";
import { Pokemon } from "../Pokemon.ts";


const SearchPokemon: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [name, setName] = useState("")
  
  const buscar = async (e: JSX.TargetedEvent<HTMLFormElement, Event>, name: string) => {
    e.preventDefault();  
    const response = await fetch(`/api/${name}`, {
        method: "GET"
      });
      const pK = await response.json();
      setPokemon(pK)
  }
    
  return (
    <section>
      <div class="search-container">
        <h1>Buscar Pokemon</h1>    
        <form method="GET" onSubmit={(e) => buscar(e, name)}>
          <div class="form">
            <p>Introduce el nombre:</p>
            <input type="text" value={name} name="name" placeholder="Name" onInput={(e) => setName(e.currentTarget.value)} />
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
      <div class="pokemon-list">
        {pokemon.map((pokemon) => (
          <a class="characterContainer" href={`/Pokemonn/${pokemon.name}`}>
            <h2 class="text-overflow">{pokemon.name}</h2>
            <img class="pokemon-image" src={pokemon.image} alt={pokemon.name} />
            <audio class="audio-player" controls>
              <source src={pokemon.sound} type="audio/mpeg" />
            </audio>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SearchPokemon;