import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Dogs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.loremText}>
        Black dogs come in many wonderful breeds, each with unique
        characteristics and temperaments. From the loyal and intelligent Black
        Labrador Retriever to the elegant and graceful Black German Shepherd,
        these dogs are known for their striking appearance and devoted nature.
        Black-coated breeds often possess excellent working abilities, making
        them ideal companions for families, service work, and various outdoor
        activities.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>Black Dog</Text>
        <Image
          source={require("../../assets/images/black-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.loremText}>
        White dogs are often associated with purity, elegance, and gentle
        temperaments. Breeds like the Samoyed, Great Pyrenees, and West Highland
        White Terrier showcase the beauty of white coats. These dogs typically
        require regular grooming to maintain their pristine appearance, but
        their stunning looks and often calm demeanor make them beloved family
        pets. Many white breeds were originally developed for specific purposes,
        from herding livestock to providing companionship in harsh climates.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>White Dog</Text>
        <Image
          source={require("../../assets/images/white-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.loremText}>
        Yellow and golden-colored dogs bring warmth and sunshine wherever they
        go. The Golden Retriever is perhaps the most famous yellow breed, known
        for their friendly disposition, intelligence, and exceptional loyalty.
        Yellow Labradors share similar traits, making them excellent family dogs
        and service animals. These warm-toned breeds are often highly trainable,
        patient with children, and possess a natural eagerness to please their
        owners, making them some of the most popular companion dogs worldwide.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>Yellow Dog</Text>
        <Image
          source={require("../../assets/images/yellow-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Dog Gallery</Text>

      <Text style={styles.loremText}>
        Black dogs come in many wonderful breeds, each with unique
        characteristics and temperaments. From the loyal and intelligent Black
        Labrador Retriever to the elegant and graceful Black German Shepherd,
        these dogs are known for their striking appearance and devoted nature.
        Black-coated breeds often possess excellent working abilities, making
        them ideal companions for families, service work, and various outdoor
        activities.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>Black Dog</Text>
        <Image
          source={require("../../assets/images/black-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.loremText}>
        White dogs are often associated with purity, elegance, and gentle
        temperaments. Breeds like the Samoyed, Great Pyrenees, and West Highland
        White Terrier showcase the beauty of white coats. These dogs typically
        require regular grooming to maintain their pristine appearance, but
        their stunning looks and often calm demeanor make them beloved family
        pets. Many white breeds were originally developed for specific purposes,
        from herding livestock to providing companionship in harsh climates.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>White Dog</Text>
        <Image
          source={require("../../assets/images/white-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.loremText}>
        Yellow and golden-colored dogs bring warmth and sunshine wherever they
        go. The Golden Retriever is perhaps the most famous yellow breed, known
        for their friendly disposition, intelligence, and exceptional loyalty.
        Yellow Labradors share similar traits, making them excellent family dogs
        and service animals. These warm-toned breeds are often highly trainable,
        patient with children, and possess a natural eagerness to please their
        owners, making them some of the most popular companion dogs worldwide.
      </Text>

      <View style={styles.dogContainer}>
        <Text style={styles.dogLabel}>Yellow Dog</Text>
        <Image
          source={require("../../assets/images/yellow-dog.png")}
          style={styles.dogImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  dogContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
  },
  dogLabel: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#444",
    textAlign: "center",
  },
  dogImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  loremText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
    fontStyle: "italic",
  },
});
