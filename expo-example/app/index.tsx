import { Text, View, StyleSheet, ScrollView, TextInput} from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import * as ScreenOrientation from 'expo-screen-orientation';
import ThemeText from '../components/ThemeText';

import * as Crypto from 'expo-crypto';


export default function Index() {

  const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.UNKNOWN);

  const uuid = Crypto.randomUUID();
  console.log("Generated UUID:", uuid);

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      console.log("Orientation changed:", event.orientationInfo.orientation);
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    }

  }, []);

  useEffect(() => {
    const unlock = async() => {
      await ScreenOrientation.unlockAsync()
      const newOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(newOrientation);
    }
    unlock();
  }, [])

  const orientationName = orientation === ScreenOrientation.Orientation.PORTRAIT_UP ? "Portrait" : "Landscape"
  return (
    <ScrollView>
      <View style={styles.view}>
        <Link href={{pathname: '/lora', params: {lastname: "Klein"}}}>
          <Text>Go to Lora Page</Text>
        </Link>
        <Link href={{pathname: '/shopping-list'}}>
          <Text>Go to Shopping Page</Text>
        </Link>
        <Link href={{pathname: '/rubber-duckies'}}>
          <Text>Go to Rubber Duckies Page</Text>
        </Link>
        <TextInput placeholder="hello everyone"></TextInput>
        <Text>{orientationName}</Text>
        <Text>{orientation}</Text>
        <ThemeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </ThemeText>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hamlet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Romeo and Juliet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Macbeth.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { color: "blue", margin: 20},
});
