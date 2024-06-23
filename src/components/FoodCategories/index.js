import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, hp, wp } from '../../enums/StyleGuide'
import { Pressable } from '../reusables'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../enums/AppEnums'

const FoodCategories = ({ item, index }) => {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.ListContainer} onPress={() => navigation.navigate(SCREEN.NEABYSHOPS)}>
            <>
                <Image source={item?.image} style={styles.listImages} />
                <Text style={styles.FoodNames}>{item?.name}</Text>
            </>
            <View style={styles.bottomLine} />
        </Pressable>
    )
}

export default FoodCategories

const styles = StyleSheet.create({
    ListContainer: {
        width: wp(24),
        alignItems: 'center',
        marginTop: hp(3)
    },
    listImages: {
        width: 62,
        height: 63
    },
    FoodNames: {
        fontFamily: FONT.medium,
        color: COLOR.dark,
        fontSize: 12,
        marginTop: hp(.5)
    },
    bottomLine: {
        width: wp(13),
        height: 1,
        backgroundColor: COLOR.primary,
        alignSelf: 'center',
        marginTop: hp(2.5),
        marginBottom: hp(.5)
    }
})