import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.offWhite
    },
    secondCard: {
        marginTop: hp(1.5),
        flex: 1
    },
    topCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingBottom: hp(2.2)
    },
    headerLabel: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLOR.black,
        marginLeft: wp(4),
        marginTop: hp(2.5),
        marginBottom: hp(.5)
    },
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
    voiceContainer: {
        ...commonStyles.justifyView
    },
    line: {
        width: 1,
        height: hp(3.3),
        backgroundColor: COLOR.primary,
        marginRight: wp(2)
    },
    buttonContainer: {
        ...commonStyles.horizontalView,
        marginTop: hp(2)
    },
    mapButtons: {
        width: wp(92),
        ...commonStyles.justifyView,
        marginTop: hp(2)
    },
    activeButton: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.primary,
        width: wp(50),
        textAlign: 'center'
    },
    inactiveButton: {
        ...TEXT_STYLE.smallText,
        color: COLOR.gray,
        width: wp(50),
        textAlign: 'center'
    }
})