import { View, Text, StyleSheet } from "react-native";
const MealDetails = (props) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{props.duration}m</Text>
      <Text style={styles.detailsItem}>{props.complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>
        {props.affordability.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: "400",
  },
});

export default MealDetails;
