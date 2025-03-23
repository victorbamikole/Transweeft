import { View, Image, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";

const googlePlacesApiKey = 'hvdjhsvbshjdbjs';

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        debounce={200}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: [
            styles.textInput,
            { backgroundColor: textInputBackgroundColor || "white" },
          ],
          listView: [
            styles.listView,
            { backgroundColor: textInputBackgroundColor || "white" },
          ],
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
        }}
        query={{
          key: googlePlacesApiKey,
          language: "en",
        }}
        renderLeftButton={() => (
          <View style={styles.iconContainer}>
            <Image
              source={icon ? icon : icons.search}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "gray",
          placeholder: initialLocation ?? "Where do you want to go?",
        }}
      /> */}
    </View>
  );
};

export default GoogleTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 50,
    borderRadius: 12,
  },
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 20,
    position: "relative",
    shadowColor: "#d4d4d4",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    width: "100%",
    borderRadius: 200,
  },
  listView: {
    position: "relative",
    top: 0,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#d4d4d4",
    zIndex: 99,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
