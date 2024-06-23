import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    topCard: {
        paddingHorizontal: wp(4),
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
    justifyView: {
        ...commonStyles.justifyView,
        paddingRight: wp(7)
    },
    helpLabel: {
        ...TEXT_STYLE.smallTextBold,
        color: COLOR.primary,
        top: hp(1.3)
    },
    nameContainer: {
        ...commonStyles.justifyView,
        paddingRight: wp(4),
        marginTop: hp(3)
    },
    resturantName: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.primary
    },
    dealLabel: {
        ...TEXT_STYLE.smallText,
        color: COLOR.gray
    },
    description: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.black,
        width: wp(55)
    },
    downloadContainer: {
        ...commonStyles.justifyView,
        width: wp(32),
        marginTop: hp(1.5),
    },
    downloadLabel: {
        fontFamily: FONT.bold,
        fontSize: 10,
        color: COLOR.primary,
        lineHeight: 12.09
    },
    dotedLine: {
        width: wp(92),
        alignSelf: 'center',
        height: 1,
        borderBottomColor: COLOR.gray,
        borderBottomWidth: 1,
        marginTop: hp(2),
        borderStyle: 'dotted'
    },
    deliver: {
        ...TEXT_STYLE.text,
        color: COLOR.gray,
        marginTop: hp(1.5)
    },
    addressContainer: {
        paddingRight: wp(5),
        marginTop: hp(2),
        borderBottomColor: COLOR.gray,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        paddingBottom: hp(2)
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
    successContainer: {
        ...commonStyles.horizontalView,
        width: wp(92),
        marginTop: hp(1.5),
        borderBottomWidth: 1,
        borderBottomColor: COLOR.primary,
        paddingBottom: hp(1.4)
    },
    successLabel: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.primary,
        marginLeft: wp(3),
        lineHeight: 20.16
    },
    orderDetail: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.gray,
        marginTop: hp(1)
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
    billStyle: {
        marginTop: hp(.5)
    },
    quantity: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.primary
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
    billContainer: {
        width: '100%',
        height: hp(3.5),
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        backgroundColor: COLOR.primary,
        marginTop: hp(2.5)
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
    bottomContent: {
        alignItems: 'center'
    },
    reorder: {
        ...TEXT_STYLE.textBold,
        color: COLOR.primary,
    },
    foodImageStyle: {
        width: 100,
        height: 114,
        resizeMode: 'contain'
    },
    messageLabel: {
        fontFamily: FONT.bold,
        fontSize: 18,
        color: COLOR.dark,
        width: wp(45),
        textAlign: 'center',
        marginTop: hp(.6)
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000000aa',
        ...commonStyles.center
    },
    ModalContainerStyling: {
        // height: hp(30),
        paddingVertical: hp(2),
        width: wp(92),
        backgroundColor: COLOR.white,
        borderRadius: hp(1.2)
    },
    modelHeader: {
        ...TEXT_STYLE.bigTextSemiBold,
        color: COLOR.darkGray,
        textAlign: 'center'
    },
    iconStyle: {
        position: 'absolute',
        top: hp(1.5),
        right: wp(3.5)
    },
    RatingContainer: {
        ...commonStyles.horizontalView_m1,
        alignSelf: 'center',
        marginTop: hp(2)
    },
})