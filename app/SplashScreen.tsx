import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Animated, {
  runOnJS,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Link, useRouter } from "expo-router";
import { images } from "@/constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "@/constants/Colors";


const SplashOne = () => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const [animationDone, setAnimationDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(delayedFunction, 700);
    return () => clearTimeout(timeoutId);
  }, []);

  const delayedFunction = () => {
    setTimeout(() => setAnimationDone(true), 700);
  };

  useEffect(() => {
    ring1Padding.value = hp(0);
    ring2Padding.value = hp(90);
    setTimeout(
      () =>
        (ring2Padding.value = withSpring(ring1Padding.value + hp(-10), {
          stiffness: 20,
        })),
      500
    );
    setTimeout(() => {
      // router.push({ pathname: "(tabs)" } as any);
      router.push({ pathname: "/welcome" } as any);
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      {animationDone ? (
        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: ring1Padding,
          }}
        >
          <Image style={styles.images} source={images.onboarding1} />
        </Animated.View>
      ) : (
        <>
          <Animated.View
            style={{
              padding: ring2Padding,
              backgroundColor: COLORS.primary,
              borderRadius: 500,
            }}
          ></Animated.View>
        </>
      )}
    </View>
  );
};

export default SplashOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF7EE",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  images: {
    width: hp(20),
    height: hp(20),
    resizeMode: "contain",
  },
});
