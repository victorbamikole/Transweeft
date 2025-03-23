import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { icons } from "@/constants";
import Map from "./Map";
import MapView from "react-native-maps";

const RideLayout = ({
  title,
  snapPoints,

  children,
}: {
  title: string;
  snapPoints?: string[];
  children: React.ReactNode;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <></>
//     <GestureHandlerRootView style={styles.container}>
//       <View style={styles.wrapper}>
//         <View style={styles.mapContainer}>
//           <View style={styles.headerContainer}>
//             <TouchableOpacity onPress={() => router.back()}>
//               <View style={styles.backButton}>
//                 <Image
//                   source={icons.backArrow}
//                   resizeMode="contain"
//                   style={styles.backIcon}
//                 />
//               </View>
//             </TouchableOpacity>
//             <Text style={styles.title}>{title || "Go Back"}</Text>
//           </View>

//           {/* <MapView/> */}
// {/* 
//           <Map
//             userLatitude={null}
//             userLongitude={null}
//             address={null}
//             destinationLatitude={null}
//             destinationLongitude={null}
//           /> */}

//           {/* <Map
//             userLatitude={userLocation.latitude}
//             userLongitude={userLocation.longitude}
//             address={null}
//             destinationLatitude={null}
//             destinationLongitude={null}
//           /> */}
//         </View>

//         <BottomSheet
//           ref={bottomSheetRef}
//           snapPoints={snapPoints || ["60%", "85%"]}
//           index={0}
//         >
//           {title === "Choose a Rider" ? (
//             <BottomSheetView style={styles.bottomSheetContent}>
//               {children}
//             </BottomSheetView>
//           ) : (
//             <BottomSheetScrollView style={styles.bottomSheetContent}>
//               {children}
//             </BottomSheetScrollView>
//           )}
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
//   mapContainer: {
//     flex: 1,
//     backgroundColor: "#3B82F6",
//   },
//   headerContainer: {
//     flexDirection: "row",
//     position: "absolute",
//     zIndex: 10,
//     top: 64,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingHorizontal: 20,
//   },
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
  title: {
    fontSize: 20,
    fontFamily: "JakartaSemiBold",
    marginLeft: 20,
  },
  bottomSheetContent: {
    flex: 1,
    padding: 20,
  },
});

export default RideLayout;
