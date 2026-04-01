
async function fetchPokemonStats() {
  const name = document.querySelector('input[name="pokemonSearch"]').value;
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemonStats = response.data;
  const imgBoxForSprite = document.createElement('img');
  imgBoxForSprite.setAttribute('src', pokemonStats.sprites.other.dream_world.front_default);
  imgBoxForSprite.style = "width: 100px; height: 80px";
  const titleForPokemon = document.createElement('h1');
  titleForPokemon.innerText = name;
  const CardCreation = document.querySelector('.Card');
  CardCreation.appendChild(imgBoxForSprite);
  CardCreation.appendChild(titleForPokemon);
}