import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../Components/Button/Button";
import { AppStackParamList } from "../../StackParamList/AppStackParamList";

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Components">;
};

const ComponentsScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, [loading]);
  return (
    <View style={styles.container}>
      <Button text={"Basic button"} onPress={() => {}} />
      <Button text={"Press Me!!"} onPress={() => setLoading(true)} corners="curved" loading={loading} size="medium" />
      <Button
        text={"Filled with curved borders"}
        onPress={() => {}}
        corners="curved"
        variant="filled"
        color="dodgerblue"
        textColor="black"
      />
      <Button text={"Outlined with rounded borders"} onPress={() => {}} corners="rounded" size="large" color="purple" />
      <Button text={"size xlarge & variant filled"} onPress={() => {}} variant="filled" size="xlarge" color="red" />
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

export default ComponentsScreen;
