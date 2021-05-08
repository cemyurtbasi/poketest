import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import pokemonSlice from "./public/pokemonSlice";

const combinedReducer = combineReducers({
  pokemons: pokemonSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "redux_reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});
