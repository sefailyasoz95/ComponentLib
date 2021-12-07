import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { AppStackParamList } from "../../StackParamList/AppStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Animations">;
};

const AnimationsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../Assets/Animations/react-logo.json")}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
});
export default AnimationsScreen;
