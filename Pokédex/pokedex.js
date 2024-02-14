const listaOrdenada = document.getElementById('pokedex');
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const container = document.getElementById('container');

const getPokemons = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results; 
  } catch(error) {
    console.log(error);
  }
};

const fetchPokemonDetails = async (pokemonUrl) => {
  try {
    const response = await fetch(pokemonUrl);
    const pokemonData = await response.json();
    return pokemonData;
  } catch(error) {
    console.log(error);
  }
};

const fetchAndPokemonsUrls = async () => {
  const pokemons = await getPokemons(); 

  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `${baseUrl}${i}`;
    const pokemonData = await fetchPokemonDetails(pokemonUrl);
    if (pokemonData) {
      const pokemon = {
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types.map((type) => type.type.name).join(', '),
        id: pokemonData.id
      };
      drawPokemons([pokemon]);
    }
  }
};

const drawPokemons = (pokemonList) => {
  for (const eachPokemon of pokemonList) {
    const li$$ = document.createElement('li');
    li$$.classList = 'card';
    const img$$ = document.createElement('img');
    img$$.src = eachPokemon.image;
    img$$.alt = eachPokemon.name;
    img$$.classList = 'card-image';
    li$$.append(img$$);
    const p$$ = document.createElement('p');
    p$$.textContent = eachPokemon.name;
    p$$.classList = 'card-title';
    li$$.append(p$$);
    const secondp = document.createElement('p');
    secondp.textContent = "Type: " + eachPokemon.type;
    secondp.classList = 'card-subtitle';
    li$$.append(secondp);
    const thirdp = document.createElement('p');
    thirdp.textContent = "ID: " + eachPokemon.id;
    thirdp.classList = 'card-subtitle';
    li$$.append(thirdp);
    listaOrdenada.append(li$$); 
  }
}

const init = () =>{
  fetchAndPokemonsUrls();
};

init();
