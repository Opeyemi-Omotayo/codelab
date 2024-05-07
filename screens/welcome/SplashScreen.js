import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { GlobalColours } from "../../utils/Colors";

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

   
    const timer = setTimeout(() => {
        navigation.navigate("Onboarding");
      }, 3000);
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
        <AntDesign name="shoppingcart" size={36} color="white" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
 logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalColours.primary ,
    borderRadius: 75,
    paddingVertical: 30,
    paddingHorizontal: 30,
 },
 
});

export default SplashScreen;
