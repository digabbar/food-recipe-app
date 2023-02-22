import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";
import { CATEGORIES } from "../data/dummy-data";
// import { useNavigation } from "@react-navigation/native";
const CategoryScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTiles
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoryScreen;
