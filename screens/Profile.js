import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";

import { GlobalColours } from "../utils/Colors";
import { StatusBar } from "expo-status-bar";
import ProfileCard from "../components/ProfileCard";

const windowHeight = Dimensions.get("window").height;

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView>
      <View style={styles.wrapper}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.image}
        />
        <View style={styles.space}>
          <Text style={styles.title}>Opeyemi Omotayo</Text>
          <Text style={styles.subtitle}>Opeyemi@gmail.com</Text>
        </View>
      </View>
      <View style={styles.bg}>
        <ProfileCard />
      </View>
      </ScrollView> 
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColours.secondary,
  },
  wrapper: {
    backgroundColor: GlobalColours.primary,
    paddingHorizontal: 20,
    paddingTop: 35,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 170,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    fontFamily: "Lato-Bold",
    color: GlobalColours.secondary,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Lato",
    color: GlobalColours.secondary,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 75,
  },
  space: {
    marginLeft: 20,
  },
  bg: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: "80%",
    zIndex: 10,
    marginTop: -60,
  },
});
