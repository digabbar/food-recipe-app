import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";

const MealList = ({ data }) => {
  const navigation = useNavigation();
  const renderMealItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealDetails", {
        id: item.id,
      });
    };
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealList;
