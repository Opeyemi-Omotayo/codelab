import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { GlobalColours } from "../utils/Colors";

const LoadingSpinner = () => {
  return (
    <View style={styles.loaderOverlay}>
      <ActivityIndicator
        style={styles.preloader}
        size="large"
        color={GlobalColours.primary}
      />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  preloader: {
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderTopColor: "#0de688",
    borderRadius: 20,
    width: 40,
    height: 40,
    animation: "$spin 1s linear infinite",
  },
});
