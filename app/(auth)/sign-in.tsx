
import { Link, router } from "expo-router";
import { Alert, Image, ScrollView, Text, View, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import COLORS from "@/constants/Colors";
import { useState } from "react";


const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const onSignInPress = () => {
    router.replace("/(root)/(tabs)/home");

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={images.signup_car} style={styles.image} />
          <Text style={styles.welcomeText}>Welcome 👋</Text>
        </View>

        <View style={styles.formContainer}>
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            style={styles.button} bgVariant={undefined} textVariant={undefined} IconLeft={undefined} IconRight={undefined}          />


          <Link href="/sign-up" asChild>
            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  welcomeText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 22,
    fontFamily: "JakartaSemiBold",
    color: COLORS.black,
  },
  formContainer: {
    padding: 20,
  },
  button: {
    marginTop: 24,
  },
  signUpText: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.grey,
    marginTop: 10,
  },
  signUpLink: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
