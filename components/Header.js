import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign , Feather, Ionicons} from "@expo/vector-icons";
import { GlobalColours } from "../utils/Colors";

const Header = () => {
  return (
    <View style={[styles.flow, styles.header]}>
      <View style={styles.logoContainer2}>
        <AntDesign name="shoppingcart" size={26} color="white" />
      </View>
      <Ionicons name="search" size={24} color="gray" style={styles.search} />
      <TextInput style={styles.input} placeholder="Search in basket" />
      <Feather name="align-left" size={32} color={GlobalColours.primary} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoContainer2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalColours.primary,
    borderRadius: 75,
    padding: 7,
  },
  header: {
    marginTop: Platform.OS === "ios" ? 60 : 40,
    marginBottom: 20,
    paddingHorizontal: 20
  },
  text: {
    paddingTop: 8,
    color: "white",
  },
  flow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 35,
    width: "71%",
    borderRadius: 8,
    fontSize: 12,
    fontFamily: "Lato",
  },
  search: {
    marginRight: -55,
    zIndex: 10
  }
});
