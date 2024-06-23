import React from 'react'
import * as ui from '../screens'
import { SCREEN } from '../enums/AppEnums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.BOTTOMTAB}>
            <Stack.Screen name={SCREEN.SPLASH} component={ui.Splash} />
            <Stack.Screen name={SCREEN.BOTTOMTAB} component={BottomTab} />
            <Stack.Screen name={SCREEN.NEABYSHOPS} component={ui.NearYouShops} />
            <Stack.Screen name={SCREEN.STORESCREEN} component={ui.StoreScreen} />
            <Stack.Screen name={SCREEN.CHOOSELOCATION} component={ui.ChooseLocation} />
            <Stack.Screen name={SCREEN.MAPSCREEN} component={ui.MapScreen} />
            <Stack.Screen name={SCREEN.ORDERSTATUS} component={ui.OrderStatus} />
            <Stack.Screen name={SCREEN.SUMMARY} component={ui.OrderSummary} />
        </Stack.Navigator>
    )
}

export default RootNavigator
