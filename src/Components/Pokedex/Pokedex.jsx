import React from "react";
import { actions, PokemonContext } from "../../context/PokemonContext";
import { Pagination, Loader, PokemonCard } from "../Components";
import "./Pokedex.css";

const Pokedex = () => {
  const [state, dispatch] = React.useContext(PokemonContext);
  const { pokemons, page, total, loading } = state;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    dispatch({ type: actions.SET_PAGE, page: nextPage });
    //setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    dispatch({ type: actions.SET_PAGE, page: nextPage });
  };

  return (
    <div className="main">
      <>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
