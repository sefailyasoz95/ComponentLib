import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Components/Button/Button";
import { AppStackParamList } from "../StackParamList/AppStackParamList";

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        text="Go to the Components"
        corners="curved"
        color="red"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        text="Go to the Animations"
        corners="curved"
        color="red"
        onPress={() => {
          navigation.navigate("Animations");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: "center",
  },
});
export default HomeScreen;
