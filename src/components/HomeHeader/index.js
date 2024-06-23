import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { SvgElement } from '../reusables'
import { BackArrow, SendArrow } from '../../assets/svg'

const HomeHeader = (props) => {
    const { onBackPress, resturantName, location, foodImage } = props
    return (
        <View>
            <SvgElement
                name={BackArrow}
                style={styles.backIconStyle}
                onPress={onBackPress}
            />

            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.nameLabel}>{resturantName}</Text>
                    <Text style={styles.deliverLabel}>Deliver at</Text>
                    <View style={styles.locationContainer}>
                        <SendArrow />
                        <Text style={styles.locationLabel}>{location}</Text>
                    </View>
                </View>
                <Image source={foodImage} style={styles.foodImageStyle} />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    backIconStyle: {
        marginTop: hp(2.5),
        marginLeft: wp(4)
    },
    headerContainer: {
        ...commonStyles.justifyView_m1,
        paddingLeft: wp(4),
        paddingRight: wp(9)
    },
    nameLabel: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLOR.black
    },
    deliverLabel: {
        fontSize: 16,
        fontFamily: FONT.bold,
        color: COLOR.gray,
        marginTop: hp(.2)
    },
    locationContainer: {
        ...commonStyles.horizontalView,
        marginTop: hp(1)
    },
    locationLabel: {
        color: COLOR.black,
        fontSize:14,
        fontFamily:FONT.regular,
        marginLeft: wp(2)
    },
    foodImageStyle: {
        width: 100,
        height: 114,
        resizeMode: 'contain'
    }
})