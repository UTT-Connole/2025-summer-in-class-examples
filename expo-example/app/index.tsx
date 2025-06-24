import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.row}>Hello World!</Text>
      <Text style={styles.row}>Hello World!</Text>
      <Text style={styles.row}>Hello World!</Text>
      <Text style={styles.row}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
