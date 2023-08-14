import React from "react";
import "../styles/Homepage.css";
import { Navbar, Searchbar, Pokedex, NotFound } from "../components/Components";
import { getPokemonData, getPokemons, searchPokemon } from "../components/API";
import { PokemonContext, actions } from "../context/PokemonContext";

const { useEffect } = React;

export default function App() {
  const [state, dispatch] = React.useContext(PokemonContext);
  const { page, notFound, searching } = state;

  const fetchPokemons = async () => {
    try {
      dispatch({ type: actions.LOAD_POKEMONS });
      const data = await getPokemons(30, 30 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      dispatch({
        type: actions.POKEMONS_LOADED,
        pokemons: results,
        total: Math.ceil(data.count / 30),
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
    // eslint-disable-next-line
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    dispatch({ type: actions.SET_SEARCHING });

    const result = await searchPokemon(pokemon);
    dispatch({ type: actions.SHOW_SEARCH_RESULTS, result: result });
  };

  return (
    <div>
      <Navbar />
      <div className="Homepage">
        <Searchbar onSearch={onSearch} />
        {notFound ? <NotFound /> : <Pokedex />}
      </div>
    </div>
  );
}
