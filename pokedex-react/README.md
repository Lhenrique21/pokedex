Pokédex - React JS

Uma Pokédex desenvolvida com React e JavaScript, consumindo dados da PokéAPI. O projeto permite explorar Pokémon, consultar suas informações e descobrir características de cada espécie.

🚀 Funcionalidades

Listagem de Pokémon: exibe nome, número, imagem e tipos.

Paginação: navegação entre páginas com 20 Pokémon por página.

Busca por nome: pesquisa Pokémon pelo nome.

Filtro por tipo: permite visualizar Pokémon de um tipo específico.

Detalhes do Pokémon: exibe altura, peso, habilidades, estatísticas base e sprites.

Modal interativo: apresenta os detalhes do Pokémon selecionado.

Estados de carregamento e erro: informa quando os dados estão sendo carregados ou quando ocorre uma falha.

Layout responsivo: adaptação para diferentes tamanhos de tela.

🛠️ Tecnologias utilizadas

React

JavaScript

HTML5

CSS3

Vite

PokéAPI

Fetch API

React Hooks (useState e useEffect)

📁 Estrutura do projeto

src/

├── components/

│   ├── PokemonCard/

│   ├── PokemonList/

│   ├── PokemonModal/

│   └── SearchBar/


├── hooks/

│   └── usePokemon.js

├── services/

│   └── pokemonApi.js

├── App.jsx

├── App.css

├── index.css

└── main.jsx

Organização

components: componentes reutilizáveis da interface.

hooks: lógica de gerenciamento de estados e carregamento dos Pokémon.

services: funções responsáveis pela comunicação com a PokéAPI.

App.jsx: componente principal, responsável por integrar os componentes e controlar a aplicação.

⚙️ Como executar o projeto

Pré-requisitos

Node.js instalado.

npm instalado.

Instalação

Clone o repositório:

git clone https://github.com/Lhenrique21/pokedex.git

Acesse a pasta do projeto:

cd pokedex-react

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

Acesse o endereço apresentado no terminal, geralmente:

http://localhost:5173

🌐 API utilizada

O projeto utiliza a PokéAPI, uma API pública que disponibiliza informações sobre o universo Pokémon.

Principais endpoints utilizados:

/pokemon: listagem e paginação.

/pokemon/{id}: informações detalhadas de cada Pokémon.

/type: listagem dos tipos disponíveis.

/type/{name}: Pokémon pertencentes a determinado tipo.

🧠 Decisões técnicas

Utilização de componentes reutilizáveis para facilitar a manutenção.

Criação de um custom hook (usePokemon) para centralizar a lógica de busca e gerenciamento dos dados.

Separação das requisições HTTP em um serviço independente (pokemonApi.js).

Utilização de useState para controlar os estados da aplicação.

Utilização de useEffect para executar as requisições à API.

Utilização de Promise.all para buscar os detalhes dos Pokémon de uma página em paralelo.

Autor: Luiz Henrique

Utilização de CSS para estilização e responsividade.



