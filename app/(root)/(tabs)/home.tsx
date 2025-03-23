import { router } from "expo-router";
import { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { Ride } from "@/types/type";
import GoogleTextInput from "@/components/GoogleTextInput";
import COLORS from "@/constants/Colors";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import MapView from "react-native-maps";
import RideLayout from "@/components/RideLayout";

const Home = () => {
  const handleSignOut = () => {};

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const mapRef = useRef<MapView | null>(null);

  const [userLocation, setUserLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    address: string;
  }>({
    latitude: null,
    longitude: null,
    address: "",
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      console.log("LOCATION", location);

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      console.log("ADDRESS", address);

      setUserLocation({
        latitude: location.coords?.latitude || null,
        longitude: location.coords?.longitude || null,
        // latitude: 37.78825,
        // longitude: -122.4324,
        address:
          address?.length > 0 ? `${address[0].name}, ${address[0].region}` : "",
      });
    })();
  }, []);
  const handleDestinationPress = (location: {
    // latitude: number;
    // longitude: number;
    // address: string;
  }) => {
    // setDestinationLocation(location);
    // router.push("/(root)/find-ride");
  };

  return (
    <RideLayout
      title={"Choose Ride"}
      children={
        <>
          <Text>Choose Ride</Text>
          <Text>Choose Ride</Text>
          <Text>Choose Ride</Text>
          <Text>Choose Ride</Text>
        </>
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  flatListContent: {
    paddingBottom: 100,
  },
  emptyContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  noResultImage: {
    width: 160,
    height: 160,
  },
  noResultText: {
    fontSize: 14,
    color: COLORS.black,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: "JakartaExtraBold",
    color: COLORS.black,
  },
  signOutButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.white,
  },
  signOutIcon: {
    width: 16,
    height: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "JakartaBold",
    marginTop: 20,
    marginBottom: 10,
    color: COLORS.black,
  },
  mapContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 300,
  },
});
