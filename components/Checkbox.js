import { StyleSheet, Text, View } from "react-native";
import React , {useState} from "react";
import { GlobalColours } from "../utils/Colors";
import { CheckBox } from "react-native-elements";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckboxToggle}
        containerStyle={styles.checkbox}
        textStyle={{ color: "white" }}
        checkedColor={GlobalColours.primary}
      />
      <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Remember me</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -20,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});
