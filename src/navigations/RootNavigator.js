import React from 'react'
import * as ui from '../screens'
import { SCREEN } from '../enums/AppEnums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name={SCREEN.SPLASH} component={ui.Splash} />
            <Stack.Screen name={SCREEN.HOME} component={ui.HomeScreen} />
            <Stack.Screen name={SCREEN.NEABYSHOPS} component={ui.NearYouShops} />
            <Stack.Screen name={SCREEN.STORESCREEN} component={ui.StoreScreen} />
            <Stack.Screen name={SCREEN.CART} component={ui.CartScreen} />

        </Stack.Navigator>
    )
}

export default RootNavigator
