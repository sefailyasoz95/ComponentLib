import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Keyboard, KeyboardAvoidingView, ScrollView, useWindowDimensions } from "react-native";
import BottomSheet from "../../Components/BottomSheet/BottomSheet";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Line from "../../Components/Line/Line";
import { AppStackParamList } from "../../StackParamList/AppStackParamList";

type Props = {
	navigation: NativeStackNavigationProp<AppStackParamList, "Components">;
};

const ComponentsScreen = ({ navigation }: Props) => {
	const dimension = useWindowDimensions();
	const [loading, setLoading] = useState(false);
	const [showBottomSheet, setShowBottomSheet] = useState({
		show: false,
		height: dimension.height / 2,
	});
	useEffect(() => {
		loading &&
			setTimeout(() => {
				setLoading(false);
			}, 2000);
	}, [loading]);
	return (
		<KeyboardAvoidingView style={styles.container} onTouchStart={Keyboard.dismiss} behavior='padding'>
			<Button text={"Basic button"} onPress={() => {}} />
			<Button text={"Press Me!!"} onPress={() => setLoading(true)} corners='curved' loading={loading} size='medium' />
			<Button
				text={"Filled with curved borders"}
				onPress={() => {}}
				corners='curved'
				variant='filled'
				color='dodgerblue'
				textColor='black'
			/>
			<Button text={"size xlarge & variant filled"} onPress={() => {}} variant='filled' size='xlarge' color='red' />
			<Line
				color='purple'
				type='medium'
				text={"This is the Line Component with text"}
				textStyle={{ color: "white", fontWeight: "bold", letterSpacing: 1 }}
			/>
			<Input
				placeholder='input component with tyoe of textarea'
				onTextChanged={(value: string) => {
					console.log("value: ", value);
				}}
				required={true}
				corner='rounded'
				type='textarea'
			/>
			<Input
				placeholder='input component with curved borders and also required'
				onTextChanged={(value: string) => {
					console.log("value: ", value);
				}}
				required={true}
			/>
			<Input
				placeholder='input component with circle borders'
				onTextChanged={(value: string) => {
					console.log("value: ", value);
				}}
				corner='circle'
			/>
			<Line color='black' type='thin' />
			<Button
				text={"Show Bottom Sheet"}
				onPress={() => {
					setShowBottomSheet({ ...showBottomSheet, show: true });
					console.log("showBottomSheet: ", showBottomSheet);
				}}
				corners='rounded'
				size='large'
				color='purple'
			/>
			<BottomSheet
				show={showBottomSheet.show}
				sheetHeight={showBottomSheet.height}
				onClose={(value: boolean) => setShowBottomSheet({ ...showBottomSheet, show: value })}
			/>
		</KeyboardAvoidingView>
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
