import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
const Favorite = (props) => {
  const favCtx = useContext(FavoriteContext);
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => {
        return pressed && styles.effect;
      }}
    >
      <Ionicons name="heart" size={32} color={props.check ? "red" : "grey"} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  effect: {
    opacity: 0.5,
  },
});

export default Favorite;
