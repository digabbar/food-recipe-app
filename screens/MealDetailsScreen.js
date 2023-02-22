import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import Favorite from "../components/Favorite";
import { FavoriteContext } from "../store/context/favorite-context";
const MealDetailsScreen = ({ navigation, route }) => {
  const favCtx = useContext(FavoriteContext);
  const mealId = route.params.id;
  const mealIsFavorite = favCtx.ids.includes(mealId);

  const meal = MEALS.find((eachMeal) => {
    return eachMeal.id === mealId;
  });
  const headerButtonPressHandler = () => {
    if (mealIsFavorite) {
      favCtx.removeFavorite(mealId);
    } else {
      favCtx.addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <Favorite onPress={headerButtonPressHandler} check={mealIsFavorite} />
        );
      },
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: meal.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle text="Ingredients" />
          <List data={meal.ingredients} />
          <SubTitle text="Step" />
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    maxWidth: "90%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
