import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, commonStyles, hp, wp } from '../../enums/StyleGuide'

const BillCard = (props) => {
    const { tax, deliveryCharges, instantOrder, style } = props
    return (
        <View style={[styles.container, style]}>
            {/* <View style={styles.line} /> */}

            <View style={styles.productPrice}>
                <Text style={styles.titleLabel}>Taxes</Text>
                <Text style={styles.chargesLabel}>₹{tax}</Text>
            </View>
            <View style={styles.productPrice}>
                <Text style={styles.titleLabel}>Delivery fee</Text>
                <Text style={styles.chargesLabel}>₹{deliveryCharges}</Text>
            </View>
            <View style={styles.productPrice}>
                <Text style={styles.titleLabel}>Instant order</Text>
                <Text style={styles.chargesLabel}>₹{instantOrder}</Text>
            </View>

            <View style={styles.line} />

        </View>
    )
}

export default BillCard

const styles = StyleSheet.create({
    container: {
        marginTop: hp(2.5),
        borderTopWidth: 1,
        borderStyle: 'dotted',
        borderTopColor: COLOR.blue_02,
        paddingTop: hp(1)
    },
    productPrice: {
        ...commonStyles.justifyView_m1,
        width: wp(92),
        alignSelf: 'center'
    },
    titleLabel: {
        fontSize: 10,
        fontFamily: FONT.regular,
        color: COLOR.dark,
        lineHeight: 12.6

    },
    chargesLabel: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
        lineHeight: 12.6
    },
    line: {
        width: wp(90),
        alignSelf: 'center',
        backgroundColor: COLOR.blue_02,
        height: 1,
        marginTop: hp(.8)
    },
})