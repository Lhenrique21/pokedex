import "./SearchBar.css";

function SearchBar({
    searchTerm,
    setSearchTerm,
    types,
    selectedType,
    setSelectedType,
    setPage
}) {

    function handleTypeChange(event) {
        setSelectedType(event.target.value);
        setPage(0);
    }

    return (
        <div className="search-container">

            <input
                type="text"
                placeholder="Buscar Pokémon pelo nome ou por ID..."
                value={searchTerm}
                onChange={(event) =>
                    setSearchTerm(event.target.value)
                }
            />

            <select
                value={selectedType}
                onChange={handleTypeChange}
            >

                <option value="">
                    Todos os tipos
                </option>

                {types.map((type) => (
                    <option
                        key={type.name}
                        value={type.name}
                    >
                        {type.name}
                    </option>
                ))}

            </select>

        </div>
    );
}

export default SearchBar;