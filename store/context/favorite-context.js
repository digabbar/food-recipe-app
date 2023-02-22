import { createContext, useState } from "react";
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = (props) => {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealId((prevState) => {
      return [...prevState, id];
    });
  };
  const removeFavorite = (id) => {
    setFavoriteMealId((prevState) => {
      return prevState.filter((mealId) => mealId !== id);
    });
  };
  return (
    <FavoriteContext.Provider
      value={{ ids: favoriteMealId, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
