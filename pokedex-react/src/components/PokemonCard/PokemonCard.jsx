import "./PokemonCard.css";


function PokemonCard({ pokemon, onClick }) {

  const pokemonId = String(pokemon.id).padStart(3, "0");

  const image = pokemon.sprites.front_default;

  return (
    <div className="pokemon-card" onClick={onClick}>

      <span className="pokemon-id">
        #{pokemonId}
      </span>

      <img
        src={image}
        alt={pokemon.name}
      />

      <h3>{pokemon.name}</h3>

      <div className="pokemon-types">
        {pokemon.types.map((item) => (
          <span
            key={item.type.name}
            className={`type ${item.type.name}`}
          >
            {item.type.name}
          </span>
        ))}
      </div>

    </div>
  );
}

export default PokemonCard;