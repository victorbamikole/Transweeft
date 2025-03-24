import { router } from "expo-router";
import { useState, useEffect, useRef, useMemo } from "react";
import * as Location from "expo-location";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
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
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DriverCard from "@/components/DriverCard";
import CustomButton from "@/components/CustomButton";
import mockDriversData from "@/constants/Mock";

const { height } = Dimensions.get("window");

const Home = () => {
  const handleSignOut = () => {};

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const mapRef = useRef<MapView | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<number>();
  const [userLocation, setUserLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    address: string;
  }>({
    latitude: null,
    longitude: null,
    address: "",
  });

  const minHeight = height * 0.2;
  const maxHeight = height * 0.8;

  const bottomSheetRef = useRef<BottomSheet>(null);
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

  const snapPoints = useMemo(() => [minHeight, maxHeight], []);

  return (
    <GestureHandlerRootView>
      <View style={styles.mapContainer}>
        <Map
          userLatitude={userLocation.latitude}
          userLongitude={userLocation.longitude}
          address={null}
          destinationLatitude={null}
          destinationLongitude={null}
          driverDetails={undefined}
        />

        <BottomSheet
          enableOverDrag={false}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={1}
          handleStyle={styles.handle}
          enableContentPanningGesture={false}
        >
          <BottomSheetView style={styles.bottomSheetContent}>
            {
              <>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 250 }}
                  data={mockDriversData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <DriverCard
                      item={item}
                      selected={selectedDriver!}
                      setSelected={() => {
                        setSelectedDriver(item.id!);
                        router.push({
                          pathname: "/(root)/book-ride",
                          params: { driver: JSON.stringify(item) },
                        });
                      }}
                    />
                  )}
                  ListFooterComponent={() => <View style={{ height: 20 }} />}
                />
              </>
            }
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  bottomSheetContent: {
    flex: 1,
    padding: 20,
    backgroundClip: COLORS.black,
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
    height: "100%",
    flex: 1,
  },
  handle: {
    height: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
});
