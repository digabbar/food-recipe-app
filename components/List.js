import { View, Text, StyleSheet } from "react-native";
const List = ({ data }) => {
  return data.map((dataPoint) => {
    return (
      <View key={dataPoint} style={styles.listItems}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  listItems: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "black",
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
});

export default List;
