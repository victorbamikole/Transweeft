import { Image, Text, View, StyleSheet } from "react-native";
import RideLayout from "@/components/RideLayout";
import { icons, images } from "@/constants";
import { useState } from "react";
import { formatTime } from "@/libs/utils";
import { useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { router } from "expo-router";

const BookRide = () => {
  const { driver } = useLocalSearchParams();
  const driverDetails = driver ? JSON.parse(driver as string) : null;
  const [success, setSuccess] = useState<boolean>(false);
  console.log("DETAILS", driverDetails);
  return (
    <>
      <ReactNativeModal
        isVisible={success}
        onBackdropPress={() => setSuccess(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={images.check} style={styles.image} />

          <Text style={styles.title}>Booking placed successfully</Text>

          <Text style={styles.description}>
            Thank you for your booking. Your reservation has been successfully
            placed. Please proceed with your trip.
          </Text>

          <CustomButton
            title="Back Home"
            onPress={() => {
              setSuccess(false);
              router.push("/(root)/(tabs)/home");
            }}
            style={styles.button}
            bgVariant={undefined}
            textVariant={undefined}
            IconLeft={undefined}
            IconRight={undefined}
          />
        </View>
      </ReactNativeModal>
      <RideLayout title="Book Ride" driverDetails={driverDetails}>
        <>
          <Text style={styles.title}>Ride Details</Text>

          <View style={styles.driverContainer}>
            <Image
              source={{ uri: driverDetails?.profile_image_url }}
              style={styles.driverImage}
            />

            <View style={styles.driverInfoContainer}>
              <Text style={styles.driverTitle}>{driverDetails?.title}</Text>
              <View style={styles.ratingContainer}>
                <Image
                  source={icons.star}
                  style={styles.ratingIcon}
                  resizeMode="contain"
                />
                <Text style={styles.ratingText}>{driverDetails?.rating}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Driver Name</Text>
              <Text style={styles.priceText}>{driverDetails?.name}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Ride Price</Text>
              <Text style={styles.priceText}>${driverDetails?.price}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Car Model</Text>
              <Text style={styles.priceText}>{driverDetails?.car_model}</Text>
            </View>
          </View>

          <View style={styles.addressContainer}>
            <CustomButton
              onPress={() => {setSuccess(true)}}
              title={"Book Ride"}
              bgVariant={undefined}
              textVariant={undefined}
              IconLeft={undefined}
              IconRight={undefined}
              style={undefined}
            />
          </View>
        </>
      </RideLayout>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "JakartaSemiBold",
    marginBottom: 12,
  },
  driverContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  driverImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  driverInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  driverTitle: {
    fontSize: 18,
    fontFamily: "JakartaSemiBold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  ratingIcon: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
  },
  detailsContainer: {
    backgroundColor: "#general-600",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
  },
  priceText: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
    color: "#0CC25F",
  },
  detailText: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
  },
  addressContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 20,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#general-700",
  },
  addressIcon: {
    width: 24,
    height: 24,
  },
  addressText: {
    fontSize: 18,
    fontFamily: "JakartaRegular",
    marginLeft: 8,
  },
  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 28,
    borderRadius: 20,
  },
  image: {
    width: 112, // Equivalent to w-28
    height: 112, // Equivalent to h-28
    marginTop: 20, // Equivalent to mt-5
  },
  titleModal: {
    fontSize: 24, // Equivalent to text-2xl
    textAlign: "center",
    fontFamily: "JakartaBold",
    marginTop: 20, // Equivalent to mt-5
  },
  description: {
    fontSize: 16, // Equivalent to text-md
    color: "#A0A0A0", // Equivalent to text-general-200
    fontFamily: "JakartaRegular",
    textAlign: "center",
    marginTop: 12, // Equivalent to mt-3
  },
  button: {
    marginTop: 20, // Equivalent to mt-5
  },
});

export default BookRide;
