import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreen from "../Screens/Components/ComponentsScreen";
import HomeScreen from "../Screens/HomeScreen";
import AnimationsScreen from "../Screens/Animations/AnimationsScreen";
interface Props {}
const Main = createNativeStackNavigator();
const MainStack = (props: Props) => {
  return (
    <Main.Navigator>
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Components" component={ComponentsScreen} />
      <Main.Screen name="Animations" component={AnimationsScreen} />
    </Main.Navigator>
  );
};

export default MainStack;
