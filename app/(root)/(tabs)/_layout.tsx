import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";

import { icons } from "@/constants";
import COLORS from "@/constants/Colors";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    style={[styles.tabIconContainer, focused && styles.tabIconContainerFocused]}
  >
    <View style={[styles.tabIcon, focused && styles.tabIconFocused]}>
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      // initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  tabIconContainerFocused: {
    // backgroundColor: COLORS.black,
  },
  tabIcon: {
    borderRadius: 50,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconFocused: {
    backgroundColor: COLORS.primary,
  },
  image: {
    width: 28,
    height: 28,
  },
  tabBar: {
    backgroundColor: COLORS.bottomTab,
    borderRadius: 50,
    paddingBottom: 30,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
    height: 78,
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
});
