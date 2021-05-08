import { createSlice } from "@reduxjs/toolkit";
import Service from "../../Service";
import { pokemonsAllModel } from "../../Shared/models/pokemonsAll";
import { initialPagingState } from "../initialState";
const service = new Service();

const slice = createSlice({
  name: "pokemons",
  initialState: initialPagingState,
  reducers: {
    setItemList: (state, { payload }) => {
      state.items = payload.pokeArray;
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
      state.totalItems = payload.totalItems;
    },
    failed: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
      state.hasMessage = payload;
    },
  },
});

export const pokemonsData = (state) => state.pokemons; // initialState üzerindeki bilgileri dışarı aktarma

export const { setItemList, failed } = slice.actions; // functions dışarıya aktarılması

export default slice.reducer;

export function fetchPokemons(currentLimit, pageSize) {
  return async (dispatch) => {
    service.pokemon
      .getPokemons(`offset=${currentLimit}&limit=${pageSize}`)
      .then((pokemons) => {
        dispatch(setItemList(pokemonsAllModel(pokemons)));
      })
      .catch(() => {
        dispatch(failed("errorMessage"));
      });
  };
}
