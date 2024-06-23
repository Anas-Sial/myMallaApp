import { StyleSheet } from "react-native"
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer
    },
    circleIcon: {
        height: hp(4),
        width: hp(4),
        borderRadius: 100,
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_10,
        ...commonStyles.center
    },
    inputStyle: {
        width: wp(80),
        height: hp(5.2),
        alignSelf: 'flex-start',
        backgroundColor: COLOR.lightGray,
        marginVertical: hp(2),
    },
    inputContainer: {
        ...commonStyles.justifyView,
        width: wp(100),
        alignSelf: 'center',
        height: hp(10),
        backgroundColor: COLOR.white,
        paddingHorizontal: wp(4)
    },
    bottomContainer: {
        height: hp(18),
        width: wp(100),
        backgroundColor: COLOR.white,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: hp(1.2),
        borderTopRightRadius: hp(1.2),
        ...commonStyles.shadow_20
    },
    locationContainer: {
        ...commonStyles.horizontalView,
        marginTop: hp(2),
        marginLeft: wp(4)
    },
    locationContent: {
        marginLeft: wp(3)
    },
    location: {
        ...TEXT_STYLE.textSemiBold,
        color: COLOR.black
    },
    city: {
        ...TEXT_STYLE.smallTextSemiBold,
        color: COLOR.gray
    },
    buttonStyle: {
        marginTop: hp(2)
    },
    modalContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: '#000000aa'
    },
    ModalContainerStyling: {
        height: hp(63),
        width: wp(100),
        backgroundColor: COLOR.white,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingTop: hp(3)
    },
    CrossButton: {
        position: 'absolute',
        alignSelf: 'center',
        top: hp(-6),
    },
    inputStyle: {
        backgroundColor: COLOR.white,
        marginVertical: hp(1.2)
    },
    focusedInput: {
        borderWidth: 1,
        borderColor: COLOR.primary
    },
    buttonContainer: {
        ...commonStyles.horizontalView,
        marginLeft: wp(2),
        marginTop: hp(1.3)
    },
    recommendButton: {
        width: wp(17),
        height: hp(3.6),
        borderWidth: 1,
        borderColor: COLOR.black,
        borderRadius: hp(.5),
        marginLeft: wp(4),
        ...commonStyles.center
    },
    selectedButton: {
        borderWidth: 0,
        backgroundColor: COLOR.primary
    },
    recommendLabel: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.black,
        lineHeight: 15.12,
        paddingHorizontal: wp(1)
    },
    selectedlabel: {
        color: COLOR.white,
    },
    modalButton: {
        marginTop: hp(2)
    }
})