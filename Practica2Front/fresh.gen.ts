// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $CPokemon from "./routes/CPokemon.tsx";
import * as $Pokemonn_name_ from "./routes/Pokemonn/[name].tsx";
import * as $SPokemon from "./routes/SPokemon.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $apii_API from "./routes/apii/API.tsx";
import * as $apii_name_ from "./routes/apii/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Buttons from "./islands/Buttons.tsx";
import * as $CreatePokemonForm from "./islands/CreatePokemonForm.tsx";
import * as $ListPokemons from "./islands/ListPokemons.tsx";
import * as $PokemonPage from "./islands/PokemonPage.tsx";
import * as $SearchPokemon from "./islands/SearchPokemon.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/CPokemon.tsx": $CPokemon,
    "./routes/Pokemonn/[name].tsx": $Pokemonn_name_,
    "./routes/SPokemon.tsx": $SPokemon,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/apii/API.tsx": $apii_API,
    "./routes/apii/[name].tsx": $apii_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Buttons.tsx": $Buttons,
    "./islands/CreatePokemonForm.tsx": $CreatePokemonForm,
    "./islands/ListPokemons.tsx": $ListPokemons,
    "./islands/PokemonPage.tsx": $PokemonPage,
    "./islands/SearchPokemon.tsx": $SearchPokemon,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
