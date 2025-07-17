import {
  NativeBottomTabNavigationEventMap,
  NativeBottomTabNavigationOptions,
  createNativeBottomTabNavigator,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { withLayoutContext } from "expo-router";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="dogs"
        options={{
          title: "Home",
          tabBarIcon: () => ({ sfSymbol: "dog" }),
        }}
      />
      <Tabs.Screen
        name="cats"
        options={{
          title: "Settings",
          tabBarIcon: () => ({ sfSymbol: "cat" }),
        }}
      />
    </Tabs>
  );
}
