import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SplashScreen from "../screens/welcome/SplashScreen";
import OnboardingScreen from "../screens/welcome/OnboardingScreen";
import Signin from "../screens/Authentication/Signin";
import BottomNav from "../screens/BottomNav";

const Auth = createStackNavigator();
function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Auth.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Auth.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="bottomNav"
        component={BottomNav}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

export default AuthStack;
