import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { GlobalColours } from "../../utils/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import LoadingSpinner from "../../components/LoadingSpinner";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!username) {
      newErrors.username = "Please enter username";
      isValid = false;
    }

    if (password.length < 5) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        setLoading(true);

        const apiUrl = "https://dummyjson.com/auth/login";

        const response = await axios.post(apiUrl, {
          username: username.toLowerCase(),
          password,
        });

        if (response.data && response.data.token) {
          console.log(response.data);
          navigation.navigate("bottomNav");
          setPassword("");
          setUsername("");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          alert("Invalid Credentials");
        } else {
          alert("Error logging in, Please try again later");
        }
      } finally {
        setLoading(false);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{padding: 15}}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      {loading && <LoadingSpinner />}
      <View style={[styles.flow, { marginTop: 40, marginBottom: 50 }]}>
        <View style={styles.logoContainer2}>
          <AntDesign name="shoppingcart" size={32} color="white" />
        </View>
        <Text style={styles.text}>basket</Text>
      </View>
      <Text style={styles.subtext}>Log into your account</Text>
      <Text style={styles.description}>
        Enter your email and password to access your account or create an
        account
      </Text>
      <View style={{ width: "100%" }}>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Feather name="mail" size={24} color={GlobalColours.primary} />
          </View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Jane Doe"
            placeholderTextColor="gray"
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <View style={[styles.direction, styles.icon]}>
            <Feather name="key" size={24} color={GlobalColours.primary} />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Feather
                name={passwordVisible ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="********"
            placeholderTextColor="gray"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>
        <Checkbox />
        <TouchableOpacity style={styles.btnWrapper} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
        <Text style={styles.continueText}>- or continue with -</Text>
        <View style={styles.direction}>
          <TouchableOpacity style={[styles.flow, styles.iconWrapper]}>
            <Entypo name="facebook" size={24} color="#000068" />
            <Text style={styles.media}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flow, styles.iconWrapper]}>
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.google}
            />
            <Text style={styles.media}>Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.acctText}>
          Don't have an account? <Text style={styles.orangeText}> Signup</Text>
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalColours.primary,
    borderRadius: 75,
    padding: 10,
    marginRight: 10,
  },
  text: {
    paddingTop: 8,
    color: GlobalColours.primary,
    fontWeight: "700",
    fontFamily: "Chonburi",
    fontSize: 18,
  },
  flow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    lineHeight: 22,
    paddingHorizontal: 5,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 50,
    fontFamily: "Lato",
  },
  subtext: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 27,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: GlobalColours.primary,
    paddingLeft: 40,
  },
  inputContainer: {
    marginVertical: 20,
  },
  icon: {
    marginBottom: -15,
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnWrapper: {
    backgroundColor: GlobalColours.secondary,
    borderRadius: 5,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
  forgotText: {
    color: GlobalColours.primary,
    fontSize: 15,
    lineHeight: 27,
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Lato",
  },
  continueText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Lato",
  },
  iconWrapper: {
    borderWidth: 1.5,
    borderColor: "gray",
    paddingVertical: 15,
    width: "44%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  media: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Lato",
  },
  google: {
    width: 30,
    height: 30,
  },
  acctText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Lato",
  },
  orangeText: {
    color: GlobalColours.primary,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
});
