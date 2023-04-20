import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import CallScreen from "../screens/Call";
import SettingsScreen from "../screens/Settings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "8ecae6" },
        }}
        sceneContainerStyle={{ backgroundColor: "8ecae6" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                color={focused ? "gray" : "gray"}
                size={"24"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Call"
          component={CallScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="users"
                color={focused ? "#1c99f4" : "gray"}
                size={"24"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          // listeners={{
          //   tabPress: (e) => {
          //     e.preventDefault();
          //   },
          // }}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>( <Feather
              name="settings"
              color={focused ? "#1c99f4" : "gray"}
              size={"24"}
            />),
          }}
        />
  
     
      </Tab.Navigator>
    </NavigationContainer>
  );
}
