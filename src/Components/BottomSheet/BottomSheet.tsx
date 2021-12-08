import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import Button from "../Button/Button";

interface Props {
	backgroundColor?: string;
	borderTopLeftAndRightRadius?: number;
	// children?: React.ReactNode;
	sheetHeight: number;
	show: boolean;
	// onPress: Function
	onClose: Function;
}
const SPRING_CONFIG = {
	damping: 80,
	overshootClamping: true,
	restDisplacementThreshold: 0.1,
	restSpeedThreshold: 0.1,
	stiffness: 500,
};
type AnimatedGHContext = {
	startTop: number;
};
const BottomSheet: React.FC<Props> = ({
	backgroundColor,
	borderTopLeftAndRightRadius,
	// children,
	sheetHeight,
	show,
	onClose,
}) => {
	const dimension = useWindowDimensions();
	const top = useSharedValue(dimension.height);
	const [showState, setShowState] = useState(show);
	const animatedStyle = useAnimatedStyle(() => {
		return {
			top: withSpring(top.value, SPRING_CONFIG),
		};
	});
	const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, AnimatedGHContext>({
		onStart(_, context) {
			context.startTop = top.value;
		},
		onActive(event, context) {
			top.value = context.startTop + event.translationY;
		},
		onEnd() {
			if (top.value > dimension.height / 2 + 200) {
				top.value = dimension.height;
			} else {
				top.value = dimension.height / 2;
			}
		},
	});
	useEffect(() => {
		top.value = withSpring(sheetHeight ? sheetHeight : dimension.height / 2, SPRING_CONFIG);
		// show && onClose(false);
	}, [show]);
	return showState ? (
		<PanGestureHandler onGestureEvent={gestureHandler}>
			<Animated.View
				style={[
					styles.container,
					{
						backgroundColor: "black",
						borderTopLeftRadius: borderTopLeftAndRightRadius,
						borderTopRightRadius: borderTopLeftAndRightRadius,
					},
					animatedStyle,
				]}>
				<Text style={{ color: "white" }}> Oh Sheet! It's here!! </Text>
			</Animated.View>
		</PanGestureHandler>
	) : (
		<></>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3.5,
		elevation: 5,
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
		zIndex: 100,
	},
});

export default BottomSheet;
