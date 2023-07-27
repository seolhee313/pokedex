import { createSlice } from "@reduxjs/toolkit";
import {
  PokemonTypeInitialState,
  generatedPokemonType,
} from "../../utils/types";
import { getInitialPokemonData } from "../redusers/getInitialPokemonData";
import { getPokemonData } from "../redusers/getPokemonData";
import { getUserPokemons } from "../redusers/getUserPokemons";
import { removePokemonFromUserList } from "../redusers/removePokemonFromUserList";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const quere = [...state.compareQueue];
      quere.splice(index, 1);
      state.compareQueue = quere;
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      state.userPokemons = action.payload!;
    });
    builder.addCase(removePokemonFromUserList.fulfilled, (state, action) => {
      const userPokemons = [...state.userPokemons];
      const index = userPokemons.findIndex(
        (pokemon) => pokemon.firebaseId === action.payload?.id
      );
      userPokemons.splice(index, 1);
      state.userPokemons = userPokemons;
    });
  },
});

export const { addToCompare, removeFromCompare, setCurrentPokemon } =
  PokemonSlice.actions;
