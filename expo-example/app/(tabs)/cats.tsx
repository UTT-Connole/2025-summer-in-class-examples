import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const catData = [
  {
    id: "1",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    description: "A playful tabby cat lounging in the sun.",
  },
  {
    id: "2",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyMg.jpg",
    description: "A curious kitten exploring the outdoors.",
  },
  {
    id: "3",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyNA.jpg",
    description: "A majestic white cat with blue eyes.",
  },
  {
    id: "4",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyNQ.jpg",
    description: "A sleepy cat taking a cozy nap.",
  },
  {
    id: "5",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyNw.jpg",
    description: "A fluffy cat gazing out the window.",
  },
  {
    id: "6",
    uri: "https://cdn2.thecatapi.com/images/MTY3ODIyOA.jpg",
    description: "A playful kitten with a ball of yarn.",
  },
];

export default function CatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={catData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 24,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  description: {
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
});
