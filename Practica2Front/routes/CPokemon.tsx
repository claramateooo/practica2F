
import { PageProps } from "$fresh/server.ts";
import { Pokemon } from "../Pokemon.ts";
import CreatePokemonForm from "../islands/CreatePokemonForm.tsx";



const Page = (props: PageProps<Pokemon[]>) => {
  return (
    <div class="pokemon-creator">
      <div class="pokemon-creator-header">
        <h1>Aqui se crean pokemos</h1>
      </div>
    </div>
  );
}

export default Page;
