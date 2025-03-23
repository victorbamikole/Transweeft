import { ButtonProps } from "@/types/type";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type CustomButtonProps = {
  onPress: any;
  title: any;
  bgVariant: any;
  textVariant: any;
  IconLeft: any;
  IconRight: any;
  style: any
};

const getBgVariantStyle = (bgVariant: ButtonProps["bgVariant"]) => {
  switch (bgVariant) {
    case "secondary":
      return styles.bgSecondary;
    case "danger":
      return styles.bgDanger;
    case "success":
      return styles.bgSuccess;
    case "outline":
      return styles.bgOutline;
    default:
      return styles.bgPrimary;
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "danger":
      return styles.textDanger;
    case "success":
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  style,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getBgVariantStyle(bgVariant), style]}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.buttonText, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 999,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bgPrimary: {
    backgroundColor: "#64bc1e",
  },
  bgSecondary: {
    backgroundColor: "#808080",
  },
  bgDanger: {
    backgroundColor: "#ff0000",
  },
  bgSuccess: {
    backgroundColor: "#008000",
  },
  bgOutline: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "#808080",
  },
  textPrimary: {
    color: "#000000",
  },
  textSecondary: {
    color: "#ffffff",
  },
  textDanger: {
    color: "#ffffff",
  },
  textSuccess: {
    color: "#ffffff",
  },
  textDefault: {
    color: "#ffffff",
  },
});

export default CustomButton;
