import { useEffect } from "react";
import '../../public/images/pokeball.svg'
const typeColors = {
  rock: "#BBAB67",
  ghost: "#6767BB",
  steel: "#AAABBA",
  water: "#3398FE",
  grass: "#50a425",
  psychic: "#FE5499",
  ice: "#67CCFE",
  dark: "#775544",
  fairy: "#EF99EF",
  normal: "#A9A998",
  fighting: "#C12239",
  flying: "#8898FE",
  poison: "#AB5499",
  ground: "#DCBB54",
  bug: "#ABBA22",
  fire: "#FF4422",
  electric: "#dfb624",
  dragon: "#7667EE",
};

export function PokemonCard({ pokemons }) {
  useEffect(() => {
    if (!pokemons) return;

    const root = document.documentElement;

    // Primary type color
    const typeColor = typeColors[pokemons.types[0].type.name];
    root.style.setProperty("--Pokemon-Type-Theme", typeColor);

    // Secondary type color (if exists)
    if (pokemons.types.length > 1) {
      const type2Color = typeColors[pokemons.types[1].type.name];
      root.style.setProperty("--Pokemon-Type-Type-2-Theme", type2Color);
    } else {
      // Reset second type if only one type
      root.style.setProperty("--Pokemon-Type-Type-2-Theme", "transparent");
    }
  }, [pokemons]);
  if (!pokemons) return null; // handle loading case

  const pokemon = pokemons; // rename for clarity

  return (
    <>
      <div id="card">
        <div id="name-box">
          <h1 id="name">{pokemon.name.toUpperCase()}</h1>
          <span id="id">#{pokemon.id.toString().padStart(3, "0")}</span>
        </div>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="sprite"
        />

        <img src="images/pokeball.svg" alt="" className="pokeball" />

        <div className="whiteLayer">
          <div id="type-box">
            {pokemon.types.map((t, i) => (
              <div key={i} className={`type${i + 1}`}>
                {t.type.name.toUpperCase()}
              </div>
            ))}
          </div>

          <h1 className="highlight-text">About</h1>

          <div className="physic">
            <h4 className="weight">{pokemon.weight / 10} kg</h4>
            <h4 className="height">{pokemon.height / 10} m</h4>

            <div className="abilities-box">
              {pokemon.abilities.map((a, i) => (
                <h4 key={i} className="abilities">
                  {a.ability.name}
                </h4>
              ))}
            </div>

            <p>Weight</p>
            <p>Height</p>
            <p>Ability</p>
          </div>

          <h1 className="highlight-text">Base Stats</h1>

          {pokemon.stats.map((s, i) => (
            <div key={i} className="grid-stats">
              <h1>{s.stat.name.toUpperCase()}</h1>
              <h3 className={s.stat.name}>
                {s.base_stat.toString().padStart(3, "0")}
              </h3>
              <div className="outer-bar">
                <div
                  className={`inner-bar ${s.stat.name}-bar`}
                  style={{ width: s.base_stat > 100 ? "100%" : `${s.base_stat}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
