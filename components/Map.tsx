import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT, Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { icons } from "@/constants";

import { Driver, MarkerData } from "@/types/type";
import {
  calculateDriverTimes,
  calculateRegion,
  generateMarkersFromData,
} from "@/libs/map";
import { MapData } from "@/types/type";
import mockDriversData from "@/constants/Mock";

// const directionsAPI = process.env.EXPO_PUBLIC_DIRECTIONS_API_KEY;

const Map = ({
  userLatitude,
  userLongitude,
  destinationLatitude,
  destinationLongitude,
  driverDetails

}: MapData) => {
  const [selectedDriver, setSelectedDriver] = useState();
  const [showMarkers, setShowMarkers] = useState<MarkerData[]>([]);
  const mapRef = useRef<MapView | null>(null);


  useEffect(() => {
    if (Array.isArray(mockDriversData)) {
      // if (!userLatitude || !userLongitude) return;

      const newMarkers = generateMarkersFromData({
        data: mockDriversData,
        userLatitude,
        userLongitude,
      });


      const newRegion: Region = {
        latitude: userLatitude ?? 37.78825,
        longitude: userLongitude ?? -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setShowMarkers(newMarkers);
       if (mapRef.current) {
          mapRef.current.animateToRegion(newRegion, 1000);
       }
    }
  }, [mockDriversData, userLatitude, userLongitude]);

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
      {driverDetails && (
        <Marker
          key={driverDetails.id}
          coordinate={{
            latitude: driverDetails.latitude,
            longitude: driverDetails.longitude,
          }}
          title={driverDetails.name}
          image={
            driverDetails === +driverDetails.id
              ? icons.selectedMarker
              : icons.marker
          }
        />
      )}

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
