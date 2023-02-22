import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  const pressHandler = ({ pressed }) => {
    return pressed && pressed.styles.effect;
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          return pressed && styles.effect;
        }}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    borderRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  imageContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  effect: {
    opacity: 0.4,
  },
});

export default MealItem;
