
import { useState } from "react";

import { usePokemon } from "./hooks/usePokemon";

import PokemonList from "./components/PokemonList/PokemonList";
import SearchBar from "./components/SearchBar/SearchBar";
import PokemonModal from "./components/PokemonModal/PokemonModal";

import "./App.css";

function App() {

    const {
        pokemon,
        types,
        selectedType,
        setSelectedType,
        loading,
        error,
        page,
        setPage,
        totalPokemon
    } = usePokemon();

    // Armazena o texto digitado na busca
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const filteredPokemon = pokemon.filter((item) => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return true;

    // Se o usuário digitou um número, pesquisa pelo ID
    if (/^\d+$/.test(search)) {
        return item.id === Number(search);
    }

    // Caso contrário, pesquisa pelo nome
    return item.name.toLowerCase().includes(search);
});

    return (

        <div className="app">

            <header className="header">
                <h1>Pokédex</h1>
                <p>Explore o universo Pokémon!</p>
            </header>

            <main className="container">

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    types={types}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    setPage={setPage}
                />

                {selectedType && (
                    <p className="type-count">
                        Existem {totalPokemon} Pokémon do tipo{" "}
                        <strong>{selectedType}</strong>.
                    </p>
                )}

                {loading && (
                    <p className="message">
                        Carregando Pokémon...
                    </p>
                )}

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                {!loading && !error && (

                    <>
                        {filteredPokemon.length > 0 ? (

                            <PokemonList 
                             pokemon={filteredPokemon}
                             onPokemonClick={setSelectedPokemon} 
                             />

                        ) : (

                            <p className="message">
                                Nenhum Pokémon encontrado.
                            </p>

                        )}

                        <div className="pagination">

                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 0}
                            >
                                Anterior
                            </button>

                            <span>
                                Página {page + 1}
                            </span>

                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={(page + 1) * 20 >= totalPokemon}
                            >
                                Próxima
                            </button>

                        </div>
                    </>

                )}

            </main>
            
            <PokemonModal
                pokemon={selectedPokemon}
                onClose={() => setSelectedPokemon(null)}
            />

        </div>
    );
}

export default App;