import React from "react";
import { View, StyleSheet, Text, StyleProp, TextStyle } from "react-native";
import { lineTypeHelper } from "../../Helpers/StyleHelpers/LineStyleHelper";

type Props = {
	type: "thin" | "medium" | "thic";
	color: string;
	text?: string;
	textStyle?: StyleProp<TextStyle>;
};

const Line: React.FC<Props> = ({ type, color, text, textStyle }) => {
	return (
		<View style={[styles.line, { backgroundColor: color, height: lineTypeHelper(type, text) }]}>
			{text && <Text style={[styles.text, textStyle]}>{text}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	line: {
		width: "100%",
		marginVertical: 3,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 16,
		alignSelf: "center",
	},
});
export default Line;
