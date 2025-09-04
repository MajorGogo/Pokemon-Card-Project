export function SearchBar({setPokemonId}){
  const handleSearch = () => {
    const input = document.querySelector(".searchPokemon").value.trim().toLowerCase();

    if (!input) return;

    // If input is a number, use it as ID
    if (!isNaN(input)) {
      const id = parseInt(input);
      if (id >= 1 && id <= 1010) {
        setPokemonId(id);
      } else {
        alert("Please enter an ID between 1 and 1010.");
      }
    } else {
      // Otherwise, treat it as a Pokémon name
      setPokemonId(input);
    }
  };
    return(
        <>
        <div id="searchbar">
        <input
          type="text"
          placeholder="Pokemon Name or Id(upto 1010)"
          class="searchPokemon"
        />
        <button id="getPokemon" onClick={handleSearch}>Search</button>
      </div>
        </>
    )
}