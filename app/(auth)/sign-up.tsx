import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import COLORS from "@/constants/Colors";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.signup_car} style={styles.image} />
          <Text style={styles.title}>Create Your Account</Text>
        </View>

        <View style={styles.inputContainer}>
          <InputField
            label="Name"
            labelStyle=""
            placeholder="Enter your Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            labelStyle=""
            placeholder="Enter your Email"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Password"
            labelStyle=""
            placeholder="Enter your Password"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
        </View>
      </View>
      <CustomButton
        onPress={() => {}}
        title={"Sign Up"}
        bgVariant="primary"
        textVariant="default"
        IconLeft={undefined}
        IconRight={undefined}
        style={styles.buttonWidth}
      />

      <Link href="/sign-in" asChild>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.text}>Already have an account? </Text>
          <Text style={styles.linkText}>Log In</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: 250,
    zIndex: 0,
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: "JakartaSemiBold",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  inputContainer: {
    padding: 20,
  },
  buttonWidth: {
    marginTop: 10,
    width: "90%",
    marginLeft: 20,
  },
  linkContainer: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: COLORS.black, 
    textAlign: "center",
  },
  linkText: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
