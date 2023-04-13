import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Tabs from "../components/tabs/TabsContainer";
import Stackscreens from "./Stackscreens";
const Tab = createBottomTabNavigator();

const BottomTabs=()=>{
    return(
        <NavigationContainer independent={true} >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "services"){
                iconName = focused ? "home-outline" : "home-outline";
              }
              if (route.name === "Food") {
                iconName = focused ? "pizza" : "pizza-outline";
              }
              if (route.name === "TrackStack") {
                iconName = focused ? "qr-code" : "qr-code-outline";
              }
              if (route.name === "Account") {
                iconName = focused ? "happy" : "happy-outline";
              }
              return <Ionicons name={iconName} size={24} color="black" />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="services"
            component={Stackscreens}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default BottomTabs