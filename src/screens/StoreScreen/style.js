import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

export const styles = StyleSheet.create({
    container: {
      ...commonStyles.mainContainer
    },
    topCard: {
      backgroundColor: COLOR.white,
      ...commonStyles.shadow_3,
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
    inputStyle: {
      width: wp(80),
      alignSelf: 'flex-start',
    },
    inputContainer: {
      ...commonStyles.justifyView,
      width: wp(90),
      alignSelf: 'center'
    },
    buttonContainer: {
      ...commonStyles.horizontalView,
      marginTop: hp(2)
    },
    discountContainer: {
      width: wp(100),
      height: hp(3),
      backgroundColor: COLOR.lightPink,
      marginTop: hp(1.5),
      ...commonStyles.justifyView,
      paddingHorizontal: wp(4)
    },
    discription: {
      fontSize: 10,
      fontFamily: FONT.medium,
      color: COLOR.dark,
      lineHeight: 12.6,
      marginLeft: wp(2.8)
    },
    cardContainer: {
      backgroundColor: COLOR.white,
      ...commonStyles.shadow_3,
      paddingBottom: hp(2),
      marginTop: hp(1.5)
    },
    cardContainer2: {
      ...commonStyles.justifyView,
      // marginTop: hp(1.5),
  
    },
    subContainer: {
      backgroundColor: COLOR.white,
      ...commonStyles.shadow_3,
      paddingBottom: hp(2),
      marginTop: hp(1.5),
      flex: 1
  
    },
    ListContainer: {
      width: wp(24),
      alignItems: 'center',
      marginTop: hp(1)
    },
    listImages: {
      width: 50,
      height: 51
    },
    FoodNames: {
      fontFamily: FONT.medium,
      color: COLOR.dark,
      fontSize: 12,
      marginTop: hp(.5)
    },
    selectedFoodNames: {
      color: COLOR.primary
    },
    rattingContainer: {
      height: hp(2.3),
      width: wp(11.4),
      borderRadius: hp(.5),
      backgroundColor: COLOR.lightPink,
      ...commonStyles.justifyView,
      paddingHorizontal: wp(1.8),
      // marginLeft: wp(2.5)
    },
    ratingLabel: {
      fontFamily: FONT.medium,
      fontSize: 10,
      color: COLOR.primary,
      lineHeight: 12.6
    },
    dotContainer: {
      backgroundColor: COLOR.gray_2,
      height: hp(2.3),
      width: hp(2.3),
      borderRadius: hp(.3),
      ...commonStyles.center,
      marginLeft: wp(2)
    },
    dot: {
      backgroundColor: COLOR.red,
      height: hp(.8),
      width: hp(.8),
      borderRadius: hp(.8) / 2
    },
    itemName: {
      ...TEXT_STYLE.bigTextSemiBold,
      color: COLOR.dark
    },
    menuContainer: {
      width: wp(34),
      height: hp(3.5),
      borderWidth: 1,
      borderColor: COLOR.black,
      ...commonStyles.justifyView,
      paddingHorizontal: wp(2.5),
      borderRadius: .5,
      marginTop: hp(1)
    },
    menuLabel: {
      fontFamily: FONT.medium,
      fontSize: 10.5,
      color: COLOR.black,
      lineHeight: 12.6
    },
    priceContainer: {
      ...commonStyles.horizontalView,
      marginTop: hp(1)
    },
    discountedPrice: {
      fontFamily: FONT.medium,
      fontSize: 10.5,
      color: COLOR.gray,
      lineHeight: 12.6,
      marginTop: hp(.6),
      marginLeft: wp(2),
      textDecorationLine: 'line-through'
    },
    heartIcon: {
      position: 'absolute',
      right: wp(43),
      bottom: hp(4)
    },
    foodImageCard: {
      width: wp(35),
      paddingVertical: hp(1.5),
      borderWidth: .8,
      borderColor: COLOR.gray,
      borderRadius: hp(.8),
      marginTop: hp(3),
      alignItems: 'center',
      marginRight: wp(5)
    },
    itemImage: {
      width: hp(10.3),
      height: hp(10.5),
    },
    addButton: {
      width: wp(28),
      paddingVertical: hp(.6),
      ...commonStyles.center,
      backgroundColor: COLOR.light,
      borderWidth: 1,
      borderColor: COLOR.primary,
      borderRadius: hp(.7),
      marginTop: hp(1.5)
    },
    addButtonLabel: {
      ...TEXT_STYLE.smallTextBold,
      color: COLOR.primary,
      lineHeight: 15.12
    },
    line: {
      width: wp(100),
      alignSelf: 'center',
      height: .5,
      backgroundColor: COLOR.primary,
      marginTop: hp(1.8)
    },
  })