import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import * as Font from 'expo-font';


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('./assets/fonts/Lato/Lato-BoldItalic.ttf'),
      'Chonburi' : require('./assets/fonts/Chonburi/Chonburi-Regular.ttf')
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
