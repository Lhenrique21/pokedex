import "./PokemonModal.css";

function PokemonModal({ pokemon, onClose }) {

    if (!pokemon) return null;

    const pokemonId = String(pokemon.id).padStart(3, "0");

    // Converte decímetros para metros
    const height = pokemon.height / 10;

    // Converte hectogramas para quilogramas
    const weight = pokemon.weight / 10;

    return (

        <div className="modal-overlay" onClick={onClose}>

            <div
                className="pokemon-modal"
                onClick={(event) => event.stopPropagation()}
            >

                <button
                    className="close-button"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="modal-header">

                    <span>#{pokemonId}</span>

                    <h2>{pokemon.name}</h2>

                    <img
                        src={pokemon.sprites.other?.["official-artwork"]?.front_default
                            || pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />

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

                <div className="pokemon-information">

                    <h3>Informações gerais</h3>

                    <div className="information-grid">

                        <div>
                            <strong>Altura</strong>
                            <p>{height} m</p>
                        </div>

                        <div>
                            <strong>Peso</strong>
                            <p>{weight} kg</p>
                        </div>

                    </div>

                    <h3>Habilidades</h3>

                    <div className="abilities">
                        {pokemon.abilities.map((item) => (
                            <span key={item.ability.name}>
                                {item.ability.name.replace("-", " ")}
                            </span>
                        ))}
                    </div>

                    <h3>Estatísticas base</h3>

                    <div className="stats">

                        {pokemon.stats.map((item) => (

                            <div
                                className="stat-item"
                                key={item.stat.name}
                            >

                                <span className="stat-name">
                                    {item.stat.name}
                                </span>

                                <span className="stat-value">
                                    {item.base_stat}
                                </span>

                                <div className="stat-bar">
                                    <div
                                        className="stat-progress"
                                        style={{
                                            width: `${Math.min(item.base_stat, 150) / 150 * 100}%`
                                        }}
                                    />
                                </div>

                            </div>

                        ))}

                    </div>

                    <h3>Sprites</h3>

                    <div className="sprites">

                        <img
                            src={pokemon.sprites.front_default}
                            alt="Sprite frontal"
                        />

                        <img
                            src={pokemon.sprites.back_default}
                            alt="Sprite traseiro"
                        />

                        <img
                            src={pokemon.sprites.front_shiny}
                            alt="Sprite frontal shiny"
                        />

                        <img
                            src={pokemon.sprites.back_shiny}
                            alt="Sprite traseiro shiny"
                        />

                    </div>

                </div>

            </div>

        </div>

    );
}

export default PokemonModal;