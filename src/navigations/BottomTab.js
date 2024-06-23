import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ui from '../screens'
import { SCREEN } from "../enums/AppEnums";
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOR, hp } from "../enums/StyleGuide";

const Tab = createBottomTabNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { display: "none" },
        tabBarStyle: { height: hp(6.8) },
        tabBarHideOnKeyboard: true
      }}>

      <Tab.Screen
        name={SCREEN.HOME}
        component={ui.HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Icon
                name="home"
                size={24}
                color={focused ? COLOR.black : COLOR.lightGray}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.CART}
        component={ui.CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Ionicons
                name="bag-check-outline"
                size={24}
                color={focused ? COLOR.black : COLOR.lightGray}
              />
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTab
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  }
})
