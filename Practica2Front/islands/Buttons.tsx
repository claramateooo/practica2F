export const SearchButton = () => {
    return (
        <button class="search-button" onClick={() => window.location.href = "/SearchPokemon"}>Búsqueda de Pokemon</button>
    );
}

export const  CreationButton = () => {
    return (
        <button class="creation-button" onClick={() => window.location.href = "/CreatePokemonForm"}>Creación de Un Pokemon</button>
    );
}