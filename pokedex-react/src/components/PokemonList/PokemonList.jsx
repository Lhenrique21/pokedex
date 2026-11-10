import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

function PokemonList({ pokemon, onPokemonClick }) {

    return (
        <div className="pokemon-grid">

            {pokemon.map((item) => (
                <PokemonCard
                    key={item.id}
                    pokemon={item}
                    onClick={() => onPokemonClick(item)}
                />
            ))}

        </div>
    );
}

export default PokemonList;