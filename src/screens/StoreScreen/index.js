import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { FilterModel, Input, Pressable, ProductDetailModel, RecommendationButton, Scrollable, SvgElement } from '../../components'
import { ArrowDown, BackArrow, ColoredCross, ColoredDiscount, HeartSvg, SeacrhSvg, Star2, filter } from '../../assets/svg'
import { buttonTitles, foods } from '../../data/local'
import { IMAGES } from '../../assets/images'

const StoreScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [selectedFood, setSelectedFood] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filterModel, setFilterModel] = useState(false)

  return (
    <View style={styles.container}>
      <Scrollable hasInput>

        {/* Header Card */}
        <View style={styles.topCard}>
          <SvgElement
            name={BackArrow}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerLabel}>Durga Groceries</Text>

          <View style={styles.inputContainer}>
            <Input
              style={styles.inputStyle}
              placeholder={`Try “biriyani”`}
              addLeft={<SvgElement name={SeacrhSvg} />}
            />
            <SvgElement name={filter} onPress={() => setFilterModel(true)} />
          </View>

          {/* recommendation Buttons */}
          <Scrollable horizontal>
            <View style={styles.buttonContainer}>
              {buttonTitles.map((item, index) => (
                <RecommendationButton key={index} item={item} index={index} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
              ))}
            </View>
          </Scrollable>

          {/* Delevery Fee */}
          <View style={styles.discountContainer}>
            <View style={{ ...commonStyles.horizontalView }}>
              <ColoredDiscount />
              <Text style={styles.discription}>Order for more than ₹300 to get free delivery</Text>
            </View>
            <SvgElement name={ColoredCross} />
          </View>

        </View>

        <View style={styles.cardContainer}>
          <Scrollable horizontal>
            <View style={styles.buttonContainer}>
              {foods.map((item, index) => (
                <Pressable style={styles.ListContainer} key={index} onPress={() => setSelectedFood(index)}>
                  <Image source={item?.image} style={styles.listImages} />
                  <Text style={[styles.FoodNames, selectedFood === index && styles.selectedFoodNames]}>{item?.name}</Text>
                </Pressable>
              ))}
            </View>
          </Scrollable>
        </View>


        {/* Card */}
        <View style={[styles.cardContainer, { ...commonStyles.justifyView }]}>
          <View style={{ marginLeft: wp(4) }}>

            <View style={{ ...commonStyles.horizontalView }}>
              <View style={styles.rattingContainer}>
                <Text style={styles.ratingLabel}>4.2</Text>
                <SvgElement name={Star2} />
              </View>
              <View style={styles.dotContainer}>
                <View style={styles.dot} />
              </View>
            </View>
            <Text style={styles.itemName}>Chicken Biriyani</Text>
            <Pressable style={styles.menuContainer}>
              <Text style={styles.menuLabel}>Full Plate</Text>
              <ArrowDown />
            </Pressable>
            <View style={styles.priceContainer}>
              <Text style={styles.itemName}>₹450.00</Text>
              <Text style={styles.discountedPrice}>₹650.00</Text>
            </View>
          </View>

          <SvgElement name={HeartSvg} style={styles.heartIcon} />
          <Pressable style={styles.foodImageCard} onPress={() => setShowModal(true)}>
            <Image source={IMAGES.saleTag} style={styles.tagStyle} />
            <Image source={IMAGES.handiImage2} style={styles.itemImage} />
            <Pressable style={styles.addButton}>
              <Text style={styles.addButtonLabel}>Add</Text>
            </Pressable>
          </Pressable>

        </View>

        {/* Product Detail Modal */}
        <ProductDetailModel
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          foodName={'Chicken Biriyani'}
          rating='4.2'
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`}
          buttonTitle='Full Plate'
          discountedPrice='450.00'
          orignalPrice='650'
          onAddPress={() => { }} />

        {/* FilterModel */}
        <FilterModel
          visible={filterModel}
          onRequestClose={() => setFilterModel(false)} />

      </Scrollable>
    </View>
  )
}

export default StoreScreen

const styles = StyleSheet.create({
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
    // marginTop: hp(1)
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
  tagStyle: {
    width: hp(5.2),
    height: hp(5.2),
    position: 'absolute',
    right: wp(-5),
    top: hp(-2)
  },
})