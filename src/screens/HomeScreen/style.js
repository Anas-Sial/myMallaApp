import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.offWhite
    },
    topCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingBottom: hp(2)
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
    secondCard: {
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        paddingBottom: hp(3),
        marginTop: hp(1.5)
    },
    cravingHeader: {
        ...commonStyles.justifyView,
        marginTop: hp(2.2),
        marginHorizontal: wp(4)
    },
    headingLabel: {
        fontFamily: FONT.semiBold,
        color: COLOR.black,
        fontSize: 14
    },
    horizontalLine: {
        width: wp(40),
        height: 1,
        backgroundColor: COLOR.blue_02,
        marginTop: hp(.8)
    },
    categoriesContainer: {
        ...commonStyles.horizontalView,
        alignSelf: 'center',
        marginTop: hp(3)
    },
    categorylabel: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.primary,
    },
    categoryIcon: {
        marginTop: hp(.8),
        marginLeft: wp(1.5)
    },
    bestSelling: {
        width: 229,
        height: 26,
        alignSelf: 'center',
        marginTop: hp(2.8),
        marginBottom: hp(.3)
    },
    thatisLabel: {
        height: hp(2.2),
        width: hp(37),
        alignSelf: 'center',
        marginTop: hp(3)
    },
    satisfyLabel: {
        width: hp(19),
        height: hp(12),
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: hp(4)
    }
})