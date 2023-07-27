import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import { getPokemonData } from "../../app/redusers/getPokemonData";
import Loader from "../../components/Loader";
import { genericPokemonType } from "../../utils/types";

function Evolution() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const pokemonData = useAppSelector(({ pokemon }) => pokemon);
  const { currentPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = currentPokemon?.evolution.map(({ pokemon }) => pokemon);
      await dispatch(getPokemonData(pokemons!));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, currentPokemon]);

  return (
    <div className="page">
      {isLoaded && <PokemonCardGrid pokemons={randomPokemons!} />}
    </div>
  );
}

export default Evolution;
