import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavorite: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
