import React, { useEffect, useState } from "react";
import api from "../../api";
import { Menu } from "../ui/menu";
import { PokedexList } from "./pokedexList";
import { NavigationBar } from "./navigationBar";
import { PokedexCard } from "./pokedexCard";

export const PokedexScreen = ({ children: Component }) => {
  const [filter, setFilter] = useState("");
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      let data = await api.list(offset);
      setCards(data.results)
    };
    fetch();
  }, [offset]);

  return (
    <>
      <div className="container container-app">
        <Menu />
        <div className="box mt-5">
          <NavigationBar setOffset={setOffset}/>
          <PokedexList cards={cards} />
        </div>
      </div>
    </>
  );
};
