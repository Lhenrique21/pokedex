const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20, offset = 0) {
    const response = await fetch(
        `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
        throw new Error('Não foi possível buscar os Pokémon');
    }

    return response.json();
}

export async function getPokemonDetails(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Não foi possível buscar os detalhes do Pokémon.");
  }

  return response.json();
}

export async function getPokemonTypes(){
    const response = await fetch (`${API_URL}/type`);

    if (!response.ok) {
        throw new Error('Não foi possível buscar os tipos de Pokémon');
    }

    return response.json();
}

export async function getPokemonByType(type) {
    const response = await fetch(`${API_URL}/type/${type}`);

    if (!response.ok) {
        throw new Error("Não foi possível buscar os Pokémon desse tipo.");
    }

    return response.json();
}

export async function getPokemonById(id) {
    const response = await fetch(`${API_URL}/pokemon/${id}`);

    if (!response.ok) {
        throw new Error("Pokémon não encontrado.");
    }

    return response.json();
}