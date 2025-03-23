import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Map from "@/components/Map";
import { icons } from "@/constants";
import MapView from "react-native-maps";

const RideLayout = ({
  title,
  snapPoints,
  children,
  driverDetails,
}: {
  title: string;
  snapPoints?: string[];
  children: React.ReactNode;
  driverDetails?: {
    id: string;
    latitude: number;
    longitude: number;
    name: string;
  };
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  return (
    <GestureHandlerRootView style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <View style={styles.mapContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <View style={styles.backButton}>
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.titleText}>{title || "Go Back"}</Text>
          </View>

          <Map
            userLatitude={null}
            userLongitude={null}
            address={null}
            destinationLatitude={null}
            destinationLongitude={null}
            driverDetails={driverDetails}
          />
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["40%", "85%"]}
          index={0}
        >
          {title === "Choose a Rider" ? (
            <BottomSheetView style={styles.sheetContainer}>
              {children}
            </BottomSheetView>
          ) : (
            <BottomSheetScrollView style={styles.sheetContainer}>
              {children}
            </BottomSheetScrollView>
          )}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "#3B82F6",
  },
  headerContainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 10,
    top: 64,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleText: {
    fontSize: 20,
    fontFamily: "JakartaSemiBold",
    marginLeft: 20,
  },
  sheetContainer: {
    flex: 1,
    padding: 20,
  },
});

export default RideLayout;
