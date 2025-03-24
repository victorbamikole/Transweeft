import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slide}>
            <View style={styles.titleContainer}>
              <Text style={styles.header}>Welcome to</Text>
            </View>
            <Text style={styles.transweeft}>Transweeft</Text>

            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
        bgVariant="primary"
        textVariant="default"
        IconLeft={undefined}
        IconRight={undefined}
        style={styles.width}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    width: "100%",
    alignItems: "flex-end",
    padding: 20,
  },
  width: {
    width: "90%",
    marginBottom: 30
  },
  skipText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 999,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#64bc1e",
    borderRadius: 999,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 40,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#858585",
    marginHorizontal: 40,
    marginTop: 10,
  },
  header: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
  },
  transweeft: {
    color: "#64bc1e",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 40,
  },
});

export default OnBoarding;
