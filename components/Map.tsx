import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { icons } from "@/constants";

import { Driver, MarkerData } from "@/types/type";
// import { APP_LOGGING } from "react-native-dotenv";
// console.log("APP_LOGGING", APP_LOGGING);
import Constants from "expo-constants";

const GOOGLE_MAPS_API_KEY = Constants.expoConfig?.extra?.googleMapsApiKey;
console.log("GOOGLE_MAPS_API_KEY", GOOGLE_MAPS_API_KEY);

console.log(GOOGLE_MAPS_API_KEY);
import {
  calculateDriverTimes,
  calculateRegion,
  generateMarkersFromData,
} from "@/libs/map";
import { MapData } from "@/types/type";
import mockDriversData from "@/constants/Mock";

const Map = ({
  userLatitude,
  userLongitude,
  destinationLatitude,
  destinationLongitude,
  driverDetails,
}: MapData) => {
  const [selectedDriver, setSelectedDriver] = useState();
  const [showMarkers, setShowMarkers] = useState<MarkerData[]>([]);
  const mapRef = useRef<MapView | null>(null);

useEffect(() => {
  if (Array.isArray(mockDriversData)) {
    const newMarkers = generateMarkersFromData({
      data: mockDriversData,
      userLatitude,
      userLongitude,
    });

    if (driverDetails) {
      const driverArrayDetails = Array.isArray(driverDetails)
        ? driverDetails
        : [driverDetails];

      console.log("DLAT", driverDetails.latitude);
      console.log("DLAT", driverDetails.longitude);

      setShowMarkers(driverArrayDetails);

      const newRegion: Region = {
        latitude: driverDetails.latitude,
        longitude: driverDetails.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      // Delay the animation slightly to ensure map is ready
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.animateToRegion(newRegion, 1000);
        }
      }, 500); // Adjust delay if needed
    } else {
      const newRegion: Region = {
        latitude: userLatitude ?? 37.78825,
        longitude: userLongitude ?? -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setShowMarkers(newMarkers);

      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.animateToRegion(newRegion, 1000);
        }
      }, 500);
    }
  }
}, [mockDriversData, userLatitude, userLongitude, driverDetails]);


  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });
  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_DEFAULT}
      showsUserLocation={true}
      userInterfaceStyle="light"
      style={styles.container}
      initialRegion={region}
    >
      {showMarkers.map((marker, index) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.name}
          image={
            selectedDriver === +marker.id ? icons.selectedMarker : icons.marker
          }
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});

export default Map;
