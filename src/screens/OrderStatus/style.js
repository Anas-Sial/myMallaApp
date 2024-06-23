import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer
    },
    circleIcon: {
        height: hp(4),
        width: hp(4),
        borderRadius: 100,
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_20,
        ...commonStyles.center,
        marginLeft: hp(2.5),
        marginTop: hp(2)
    },
    cardContainer: {
        // height: hp(73),
        paddingVertical: hp(2),
        width: wp(100),
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_20,
        borderTopLeftRadius: hp(2),
        borderTopRightRadius: hp(2),
        paddingTop: hp(3),
        position: 'absolute',
        bottom: 0
    },
    resturantName: {
        ...TEXT_STYLE.bigTextSemiBold,
        color: COLOR.black,
        lineHeight: 20.16
    },
    discription: {
        ...TEXT_STYLE.smallText,
        color: COLOR.darkGray,
        width: wp(60),
        marginTop: hp(.3),
        lineHeight: 15.12

    },
    progressbar: {
        alignSelf: 'center',
        borderColor: COLOR.lightGray,
        marginTop: hp(2.3)
    },
    storeImage: {
        height: hp(4.5),
        width: hp(4.6),
        borderRadius: hp(.5)
    },
    infoContainer: {
        ...commonStyles.horizontalView,
        marginLeft: wp(4),
        marginTop: hp(2.5)
    },
    infoContainer2: {
        ...commonStyles.justifyView,
        width: wp(92),
        alignSelf: 'center',
        marginTop: hp(2.5),
        paddingRight: wp(6)
    },
    subContainer: {
        ...commonStyles.horizontalView
    },
    riderImage: {
        height: hp(3.6),
        width: hp(3.6),
        borderRadius: hp(3.6) / 2
    },
    riderName: {
        ...TEXT_STYLE.smallTextBold,
        color: COLOR.dark,
    },
    rideDisc: {
        fontFamily: FONT.regular,
        fontSize: 10,
        color: COLOR.darkGray,
    },
    line: {
        height: 1,
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: COLOR.gray,
        marginTop: hp(2.2)
    },
    billContainer: {
        width: '100%',
        height: hp(3.5),
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        backgroundColor: COLOR.primary,
        marginTop: hp(2.5)
    },
    bottomContainer: {
        width: wp(92),
        alignSelf: 'center'
    },
    billLabel: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.white,
    },
    productPrice: {
        ...commonStyles.justifyView_m1
    },
    foodName: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.black,
    },
    quantity: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.primary
    },
    addLabel: {
        fontSize: 10,
        fontFamily: FONT.bold,
        color: COLOR.primary,
        lineHeight: 12.6
    },
    BorderBottom: {
        marginTop: hp(1.4),
        borderBottomWidth: 1.2,
        borderBottomColor: COLOR.lightGray,
        paddingBottom: hp(1.4)
    },
    payBy: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.black,
    },
    paidLabel: {
        fontFamily: FONT.semiBold,
        fontSize: 10,
        color: COLOR.darkGray,
    },
    labelStyle: {
        fontFamily: FONT.regular,
        fontSize: 10,
        color: COLOR.darkGray
    },
    location: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.dark,
        width: wp(70),
    }
})