import React, { useState } from "react";
import "./SortButton.css";
import { CloseVector, SortVector } from "../../assets/Assets";
import {
  PokemonContext,
  actions,
  sortTypes,
} from "../../context/PokemonContext";

function SortButton() {
  const [state, dispatch] = React.useContext(PokemonContext);

  const onIDChange = () => {
    dispatch({ type: actions.SET_SORT, sortType: sortTypes.ID });
  };

  const onNameChange = () => {
    dispatch({ type: actions.SET_SORT, sortType: sortTypes.NAME });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sort-button">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? CloseVector : SortVector} alt="" />
        </button>
      </div>
      <div className={"sort-menu " + (isOpen ? "open" : "closed")}>
        <div className="sort-menu-title">
          <p>Sort by:</p>
        </div>
        <div className="sort-menu-section">
          <label>
            <input
              type="radio"
              name="sortBy"
              value="id"
              onChange={onIDChange}
              checked={state.currentSort === sortTypes.ID ? true : false}
            />
            Number
          </label>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="name"
              onChange={onNameChange}
              checked={state.currentSort === sortTypes.NAME ? true : false}
            />
            Name
          </label>
        </div>
      </div>
    </>
  );
}

export default SortButton;
