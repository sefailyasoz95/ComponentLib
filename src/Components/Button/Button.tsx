import React from "react";
import { StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import { cornerHelper, sizeHelper, variantHelper } from "../../Helpers/StyleHelpers/ButtonStyleHelpers";
import * as Haptics from "expo-haptics";
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// import { useTranslation } from "react-i18next";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};
type Props = {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: Function;
  text: string;
  loading?: boolean;
  disabled?: boolean;
  size: "small" | "medium" | "large" | "xlarge";
  variant: "filled" | "outlined";
  corners: "cornered" | "curved" | "rounded";
  color?: string;
  textColor?: string;
};
const Button: React.FC<Props> = ({
  buttonStyle,
  textStyle,
  onPress,
  text,
  loading,
  disabled,
  size,
  variant,
  corners,
  color,
  textColor,
}) => {
  let txtColor =
    variant === "outlined" ? (textColor ? textColor : color ? color : "black") : textColor ? textColor : "black";

  return (
    <TouchableOpacity
      key={text}
      disabled={disabled}
      style={[styles.button, sizeHelper(size), variantHelper(variant, color), cornerHelper(corners), buttonStyle]}
      onPress={() => !disabled && onPress()}
      onPressIn={async () => !disabled && (await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium))}
    >
      <Text key={text + "1"} style={[styles.buttonText, textStyle, { color: txtColor }]}>
        {loading ? "loading..." : text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    paddingHorizontal: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});
export default Button;
