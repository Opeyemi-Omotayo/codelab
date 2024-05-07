import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { AppState } from "react-native";
import { GlobalColours } from "../utils/Colors";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const lastInteractionTime = useRef(Date.now());

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      lastInteractionTime.current = Date.now();
    }
  };

  useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  useEffect(() => {
    const checkInactivityInterval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastInteractionTime.current;

      if (elapsedTime > 10 * 60 * 1000 && isFocused) {
        navigation.navigate("Signin");

        clearInterval(checkInactivityInterval);
      }
    }, 1000);

    return () => {
      clearInterval(checkInactivityInterval);
    };
  }, [navigation, isFocused]);

  useEffect(() => {
    lastInteractionTime.current = Date.now();
  }, [isFocused]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: GlobalColours.primary,
        tabBarInactiveTintColor: "#BDBDBD",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
