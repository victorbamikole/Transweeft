import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { icons } from "@/constants";
import { DriverCardProps } from "@/types/type";
import { formatTime } from "@/libs/utils";

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      style={[
        styles.container,
        selected === item.id ? styles.selected : styles.unselected,
      ]}
    >
      <Image
        source={{ uri: item.profile_image_url }}
        style={styles.profileImage}
      />

      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.iconSmall} />
            <Text style={styles.textSmall}>4</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.priceContainer}>
            <Image source={icons.dollar} style={styles.iconMedium} />
            <Text style={styles.textSmall}>${item.price}</Text>
          </View>

          <Text style={styles.separator}>|</Text>
          {/* <Text style={styles.textSmall}>{formatTime(item.car_model!)}</Text> */}
          <Text style={styles.separator}>|</Text>
          <Text style={styles.textSmall}>{item.car_model}</Text>
        </View>
      </View>

      <Image
        source={{ uri: item.car_image_url }}
        style={styles.carImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  selected: {
    backgroundColor: "#4CAF50",
  },
  unselected: {
    backgroundColor: "#FFFFFF",
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    fontSize: 14,
    color: "#555555",
    marginHorizontal: 5,
  },
  textSmall: {
    fontSize: 14,
    fontFamily: "JakartaRegular",
    color: "#555555",
  },
  iconSmall: {
    width: 14,
    height: 14,
  },
  iconMedium: {
    width: 16,
    height: 16,
  },
  carImage: {
    width: 56,
    height: 56,
  },
});

export default DriverCard;
