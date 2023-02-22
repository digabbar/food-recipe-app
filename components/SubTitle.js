import { View, Text, StyleSheet } from "react-native";
const SubTitle = (props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.text.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default SubTitle;
