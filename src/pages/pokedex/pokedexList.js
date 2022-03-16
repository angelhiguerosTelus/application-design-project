import React from "react";
import { PokedexCard } from "./pokedexCard";

export const PokedexList = ({ cards }) => {
  return (
    <>
      <div className="columns is-multiline">

        {cards.map(card => <PokedexCard key={card.name} {...card} />)}

      </div>
    </>
  );
};
