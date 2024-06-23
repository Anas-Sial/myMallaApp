import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { SvgElement } from '../../components'
import { BackArrow } from '../../assets/svg'

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.topCard}>
                <SvgElement
                    name={BackArrow}
                    style={styles.backIconStyle}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerLabel}>Cart</Text>
                <Text style={styles.resturantName}>Punjab Rasoi</Text>
                <Text style={styles.discription}>Court More, Opposite Orodental Hospital Asansol</Text>
                <View style={styles.billContainer}>
                    <Text style={styles.billLabel}>Bill Details</Text>
                </View>

            </View>


        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer
    },
    topCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingHorizontal: wp(4)
    },
    headerLabel: {
        ...TEXT_STYLE.smallTitleBold,
        color: COLOR.dark,
        marginTop: hp(2.5),
        marginBottom: hp(.5)
    },
    backIconStyle: {
        marginTop: hp(2.5),
    },
    resturantName: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.primary,
    },
    discription: {
        fontSize: 10,
        fontFamily: FONT.medium,
        color: COLOR.dark,
        width: wp(60),
        marginTop: hp(.3)
    },
    billContainer: {
        width: '100%',
        height: hp(3.5),
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        backgroundColor: COLOR.primary,
        marginTop: hp(2.5)
    },
    billLabel: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.white,
    }
})