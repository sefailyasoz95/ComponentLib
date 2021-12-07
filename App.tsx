import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import MainStack from "./src/Stacks/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
