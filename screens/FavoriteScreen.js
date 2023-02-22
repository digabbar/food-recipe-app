import { useContext } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-context";
const FavoriteScreen = () => {
  const favCtx = useContext(FavoriteContext);
  const favMeals = MEALS.filter((meal) => {
    return favCtx.ids.includes(meal.id);
  });
  console.log(favMeals);
  return <MealList data={favMeals} />;
};

export default FavoriteScreen;
