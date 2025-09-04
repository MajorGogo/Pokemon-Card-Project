export function Button({ pokemonId, setPokemonId }) {
    return (
        <>
            <div className="btn">

                <button className="left button" id="left"
                    onClick={() => setPokemonId(pokemonId > 1 ? pokemonId - 1 : 1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <button className="random"
                    onClick={() => setPokemonId(Math.floor(Math.random() * 1010) + 1)}>
                    Random
                </button>

                <button className="right button" id="right"
                onClick={() => setPokemonId(pokemonId + 1)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    )
}