import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { Pressable } from '../reusables'

const CardHeader = (props) => {
    const { orderId, dateAndTime, duration, onHelpPress } = props
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.labelStyle}>Order ID:- <Text style={styles.boldLabel}>{orderId}</Text></Text>
                <Text style={styles.labelStyle}>Date:- {dateAndTime}</Text>
            </View>
            <View style={styles.rightLine} />
            <View>
                <Text style={styles.labelStyle}>Delivering</Text>
                <Text style={styles.duration}>under {duration}</Text>
            </View>
            <View style={styles.rightLine} />
            <Pressable onPress={onHelpPress}>
                <Text style={styles.helpLabel}>Help</Text>
            </Pressable>
        </View>
    )
}

export default CardHeader

const styles = StyleSheet.create({
    headerContainer: {
        ...commonStyles.justifyView,
        paddingHorizontal: wp(4)
    },
    labelStyle: {
        fontFamily: FONT.regular,
        fontSize: 10,
        color: COLOR.darkGray
    },
    duration: {
        fontFamily: FONT.semiBold,
        fontSize: 10,
        color: COLOR.primary
    },
    boldLabel: {
        fontFamily: FONT.semiBold,
        fontSize: 10,
        color: COLOR.darkGray
    },
    rightLine: {
        backgroundColor: COLOR.gray,
        width: 1,
        height: hp(4.5)
    },
    helpLabel: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.darkRed
    }
})