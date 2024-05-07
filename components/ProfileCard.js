import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { GlobalColours } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

const data = [
  {
    icon: (
      <Ionicons
        name="notifications-sharp"
        size={24}
        color={GlobalColours.primary}
      />
    ),
    text: "Notification",
    id: 1,
  },
  {
    icon: (
      <FontAwesome5 name="user-check" size={22} color={GlobalColours.primary} />
    ),
    text: "Edit Profile",
    id: 2,
  },
  {
    icon: <FontAwesome name="star-o" size={24} color={GlobalColours.primary} />,
    text: "WishList",
    id: 3,
  },
  {
    icon: (
      <MaterialIcons
        name="history-edu"
        size={24}
        color={GlobalColours.primary}
      />
    ),
    text: "Order History",
    id: 4,
  },
  {
    icon: (
      <MaterialIcons
        name="track-changes"
        size={24}
        color={GlobalColours.primary}
      />
    ),
    text: "Track Order",
    id: 5,
  },
  {
    icon: (
      <AntDesign name="creditcard" size={24} color={GlobalColours.primary} />
    ),
    text: "Payment Option",
    id: 6,
  },
  {
    icon: <Ionicons name="settings" size={24} color={GlobalColours.primary} />,
    text: "Settings",
    id: 7,
  },
  {
    icon: (
      <MaterialIcons name="logout" size={24} color={GlobalColours.primary} />
    ),
    text: "Logout",
    id: 8,
  },
];

const ProfileCard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.settingsContainer}>
      {data.map((item) => (
        <TouchableOpacity
          style={styles.settings}
          key={item.id}
          onPress={() => (item.text === "Logout" ? handleLogout() : null)}
        >
          {item.icon}
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: "white",
    zIndex: 30,
    marginHorizontal: 20,
    marginTop: -60,
    borderRadius: 12,
    paddingTop: 30,
    paddingBottom: 30
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 25,
    fontFamily: "Lato-Bold",
  },
  settings: {
    flexDirection: "row",
    marginVertical: 15,
    paddingLeft: 60,
  },
});
