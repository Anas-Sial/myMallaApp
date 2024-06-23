import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer
    },
    topCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingHorizontal: wp(4),
        paddingBottom: hp(3.5)
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
    payBy: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.black,
    },
    Deliverto: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.gray,
        marginTop: hp(.4)
    },
    addressContainer: {
        paddingRight: wp(5),
        marginTop: hp(1)
    },
    subContainer: {
        ...commonStyles.justifyView
    },
    address: {
        ...commonStyles.horizontalView
    },
    addressTitle: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.primary,
        marginLeft: wp(1.5)
    },
    addressLabel: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.darkGray,
        width: wp(60),
        lineHeight: 17.58,
        marginTop: hp(.2)
    },
    instructionCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingHorizontal: wp(4),
        marginTop: hp(2),
        paddingVertical: hp(1.6)
    },
    information: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.darkGray,
    },
    policyLabel: {
        fontSize: 10,
        fontFamily: FONT.semiBold,
        color: COLOR.darkRed,
        marginTop: wp(1)
    },
    bottomCard: {
        backgroundColor: COLOR.white,
        // ...commonStyles.shadow_3,
        paddingHorizontal: wp(4),
        marginTop: hp(2),
        paddingTop: hp(1),
        flex: 1
    },
    payTitle: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.dark,
        marginRight: wp(2),
        lineHeight: 15.12
    },
    changelabel: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.blue
    },
    payContainer: {
        ...commonStyles.horizontalView,
        marginTop: hp(1)
    },
    payImage: {
        width: 39,
        height: 15,
        resizeMode: 'contain'
    },
    googlePaylabel: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.dark,
        lineHeight: 17.64,
        marginLeft: wp(2)
    },
    buttonStyle: {
        width: wp(92),
        marginTop: hp(3)
    }
})