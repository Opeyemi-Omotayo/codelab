import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SplashScreen = () => {
  const navigation = useNavigation();
  const pulseAnimation = useRef(new Animated.Value(0.8)).current;
  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 0.7,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0.8,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => pulse());
    };

    pulse();

   

    return () => clearTimeout(timer);
  }, [navigation, pulseAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ scale: pulseAnimation }] },
        ]}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
        <Text>basket</Text>
      </Animated.View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
 logoContainer: {
    backgroundColor: "#FF7518",
    borderRadius: 75,
    padding: 20
 }
 
});

export default SplashScreen;
