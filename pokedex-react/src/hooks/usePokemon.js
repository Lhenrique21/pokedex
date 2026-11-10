import { useState, useEffect } from 'react';

import {
    getPokemonList,
    getPokemonDetails,
    getPokemonTypes,
    getPokemonByType
} from '../services/pokemonApi';

export function usePokemon() {

    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(0);
    const [totalPokemon, setTotalPokemon] = useState(0);

    const limit = 20;

    // Carrega os tipos disponíveis na PokéAPI
    useEffect(() => {

        async function fetchTypes() {
            try {
                const data = await getPokemonTypes();
                setTypes(data.results);
            } catch (err) {
                console.error("Erro ao buscar tipos:", err);
            }
        }

        fetchTypes();

    }, []);

    // Busca os Pokémon de acordo com a página e o tipo selecionado
    useEffect(() => {

        async function fetchPokemon() {

            try {
                setLoading(true);
                setError(null);

                let pokemonResults = [];

                if (selectedType) {

                    // Busca os Pokémon pertencentes ao tipo escolhido
                    const data = await getPokemonByType(selectedType);

                    setTotalPokemon(data.pokemon.length);

                    // Separa apenas os 20 Pokémon da página atual
                    pokemonResults = data.pokemon.slice(
                        page * limit,
                        (page + 1) * limit
                    );

                    // Recupera os detalhes de cada Pokémon
                    const details = await Promise.all(
                        pokemonResults.map((item) =>
                            getPokemonDetails(item.pokemon.url)
                        )
                    );

                    setPokemon(details);

                } else {

                    // Busca a listagem completa com paginação
                    const data = await getPokemonList(
                        limit,
                        page * limit
                    );

                    setTotalPokemon(data.count);

                    const details = await Promise.all(
                        data.results.map((item) =>
                            getPokemonDetails(item.url)
                        )
                    );

                    setPokemon(details);
                }

            } catch (err) {

                setError("Não foi possível carregar os Pokémon.");
                console.error(err);

            } finally {

                setLoading(false);

            }

        }

        fetchPokemon();

    }, [page, selectedType]);

    return {
        pokemon,
        types,
        selectedType,
        setSelectedType,
        loading,
        error,
        page,
        setPage,
        totalPokemon
    };
}