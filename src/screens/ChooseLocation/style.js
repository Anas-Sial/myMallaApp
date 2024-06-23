import { StyleSheet } from "react-native"
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    headerLabel: {
        ...TEXT_STYLE.smallTitleBold,
        color: COLOR.dark,
        marginTop: hp(2.5),
        marginBottom: hp(.5),
        marginLeft: wp(4)
    },
    backIconStyle: {
        marginTop: hp(2.5),
        marginLeft: wp(4)
    },
    buttonContainer: {
        ...commonStyles.horizontalView,
        paddingHorizontal: wp(5),
        marginTop: hp(2),
        borderBottomColor: COLOR.blue_02,
        borderBottomWidth: 1,
        paddingBottom: hp(2),
    },
    buttonTitle: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.primary,
        marginLeft: wp(3)
    },
    addUserButton: {
        ...commonStyles.horizontalView,
        paddingHorizontal: wp(5),
        marginTop: hp(2),
    },
    savedLabel: {
        ...TEXT_STYLE.textMedium,
        color: COLOR.darkGray,
        marginLeft: wp(5),
        marginTop: hp(3)
    },
    addressContainer: {
        width: wp(92),
        alignSelf: 'center',
        paddingRight: wp(5),
        marginTop: hp(2),
        borderBottomWidth: 1,
        borderBottomColor: COLOR.blue_02,
        paddingBottom: hp(2.3)
    },
    subContainer: {
        ...commonStyles.justifyView,
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
    iconContainer: {
        width: wp(11),
        ...commonStyles.justifyView,
    }
})