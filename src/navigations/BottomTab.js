import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ui from '../screens'
import { SCREEN } from "../enums/AppEnums";
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOR, hp } from "../enums/StyleGuide";
import { IMAGES } from "../assets/images";

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
              <Image source={IMAGES.home} style={{
                ...styles.imageStyle, tintColor
                  : focused ? COLOR.primary : COLOR.gray
              }} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.HEART}
        component={ui.CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image source={IMAGES.heart} style={{
                ...styles.imageStyle, tintColor
                  : focused ? COLOR.primary : COLOR.gray
              }} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.CHECKOUT}
        component={ui.CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image source={IMAGES.checkout} style={{
                width: 50, height: 50, resizeMode: "contain", bottom: 26
              }} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.READ}
        component={ui.CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image source={IMAGES.read} style={{
                ...styles.imageStyle, tintColor
                  : focused ? COLOR.primary : COLOR.gray
              }} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.FAVOURITE}
        component={ui.CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image source={IMAGES.favourite} style={{
                ...styles.imageStyle, tintColor
                  : focused ? COLOR.primary : COLOR.gray
              }} />
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
    width: 24,
    height: 24,
    resizeMode: "contain"
  }
})
