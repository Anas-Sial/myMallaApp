import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, SvgElement } from '../reusables'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { WhiteStar } from '../../assets/svg'

const BestSellingItems = ({ item, index }) => {
    return (
        <Pressable style={styles.selliingItemContainer}>
            <Image source={item?.image} style={styles.bestImages} />
            <Text style={styles.grocerlabel}>{item?.name}</Text>
            <View style={{ ...commonStyles.justifyView_m05, width: wp(22) }}>
                <View style={styles.rattingContainer}>
                    <Text style={styles.ratingLabel}>{item?.rating}</Text>
                    <SvgElement name={WhiteStar} />
                </View>
                <Text style={styles.distanceLabel}>{item?.distance}</Text>
            </View>
        </Pressable>
    )
}

export default BestSellingItems

const styles = StyleSheet.create({
    selliingItemContainer: {
        marginLeft: wp(5),
        marginTop: hp(3)
    },
    bestImages: {
        width: hp(10.7),
        height: hp(10.5),
        borderRadius: hp(.7)
    },
    grocerlabel: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.dark,
        marginTop: hp(.5)
    },
    rattingContainer: {
        height: hp(1.8),
        width: wp(9.5),
        borderRadius: hp(5),
        backgroundColor: COLOR.primary,
        ...commonStyles.justifyView,
        paddingHorizontal: wp(1.8)
    },
    ratingLabel: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.white,
        lineHeight: 12.6
    },
    distanceLabel: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.gray,
    }
})