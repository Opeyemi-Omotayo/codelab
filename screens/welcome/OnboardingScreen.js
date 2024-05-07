import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";
import { GlobalColours } from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const OnboardingScreen = () => {
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate("Signin");
  };


  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      loop={false}
    >
      <View style={styles.slide}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("../../assets/images/shirts.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.slideContent}>
            <View style={styles.content1}>
              <View style={styles.logoContainer}>
                <AntDesign name="shoppingcart" size={32} color="white" />
                <Text style={styles.text}>basket</Text>
              </View>
              <Text style={styles.title}>Start Shopping.</Text>
              <Text style={styles.title}>Stay Happy.</Text>
              <Text style={styles.title}>Anytime.</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.headerText}>Basket Online MarketPlace</Text>
              <View style={styles.direction}>
                <TouchableOpacity onPress={handleGetStarted}>
                  <Text style={styles.btnText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextSlide}>
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.slide}>
        <View style={styles.slideContent2}>
          <View style={styles.wrapper}>
            <View style={[styles.flow, { marginTop: 50, marginBottom: 20 }]}>
              <View style={styles.logoContainer2}>
                <AntDesign name="shoppingcart" size={32} color="white" />
              </View>
              <Text style={styles.text2}>basket</Text>
            </View>
            <Text style={[styles.description, {marginTop: 30}]}>Welcome to</Text>
            <Text style={styles.subtext}>basket online store</Text>
            <Text style={styles.description}>
              basket is the n01 online store for both new and used products
            </Text>
          </View>
          <Image
            source={require("../../assets/images/family.png")}
            style={styles.img}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.nextButtonText}>Get Started</Text>
            <AntDesign
              name="arrowright"
              size={28}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
  },
  slideContent: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalColours.secondary,
    opacity: 0.8,
    height: windowHeight,
    width: "100%",
  },
  slideContent2: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalColours.secondary,
    height: windowHeight,
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalColours.primary,
    borderRadius: 75,
    paddingVertical: 30,
    paddingHorizontal:  windowWidth > 370 ? 20 : 30,
    marginBottom: 20,
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
    color: "white",
    fontSize: 18,
    fontFamily: "Chonburi",
  },
  text2: {
    paddingTop: 8,
    color: GlobalColours.primary,
    fontSize: 20,
    fontFamily: "Chonburi",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    lineHeight: 35,
    fontFamily: "Lato-Bold",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "700",
    color: GlobalColours.primary,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
    color: GlobalColours.primary,
    fontFamily: "Lato-Bold",
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content2: {
    marginBottom: 40,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  content1: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "70%",
  },
  flow: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    paddingHorizontal: 20,
    lineHeight: 24,
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
    fontFamily: "Lato",
  },
  subtext: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 27,
    color: "white",
    marginBottom: 10,
    fontFamily: "Chonburi",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    backgroundColor: GlobalColours.primary,
    borderRadius: 8,
    marginBottom: 50,
    paddingVertical: 12,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
    marginRight: 20,
    fontFamily: "Lato",
  },
  img: {
    width: windowWidth > 370 ?  320 : 280,
    height: windowHeight > 700 ? 320 : 250,
    resizeMode: "cover",
    borderTopRightRadius: 180,
    borderTopLeftRadius: 180,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  icon: {},
  activeDot: {
    backgroundColor: "#fff",
    width: 15,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 3,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default OnboardingScreen;
