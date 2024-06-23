import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { SvgElement } from '../reusables'
import { HeartSvg, WhiteStar } from '../../assets/svg'
import { nearbyStores } from '../../data/local'

const SeeStories = () => {

  return (
    <View style={styles.container}>

      <FlatList
        data={nearbyStores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <View style={styles.nearbyList}>
              <Image source={item?.image} style={styles.nearbyImages} />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.resturantName}>{item?.name}</Text>
                  <SvgElement name={HeartSvg} />
                </View>
                <Text style={styles.DealLabel}>{item?.deal}</Text>
                <Text style={styles.DescriptionLabel}>{item?.description}</Text>
                <View style={styles.rattingContainer}>
                  <Text style={styles.ratingLabel}>{item?.rating}</Text>
                  <SvgElement name={WhiteStar} />
                </View>
              </View>
            </View>
            <View style={styles.Line} />
          </>
        )}
      />

    </View>
  )
}

export default SeeStories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    ...commonStyles.shadow_3,
  },
  nearbyList: {
    ...commonStyles.justifyView,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  nearbyImages: {
    width: hp(12.1),
    height: hp(11.8),
    borderRadius: hp(.7),
  },
  nameContainer: {
    width: wp(55),
    ...commonStyles.justifyView,
  },
  resturantName: {
    ...TEXT_STYLE.textMedium,
    color: COLOR.dark
  },
  DealLabel: {
    ...TEXT_STYLE.text,
    color: COLOR.gray
  },
  DescriptionLabel: {
    fontFamily: FONT.medium,
    color: COLOR.dark,
    fontSize: 10,
    width: wp(60),
    marginTop: hp(.4)
  },
  rattingContainer: {
    height: hp(1.8),
    width: wp(9.5),
    borderRadius: hp(5),
    backgroundColor: COLOR.primary,
    ...commonStyles.justifyView,
    paddingHorizontal: wp(1.8),
    marginTop: hp(.6)
  },
  ratingLabel: {
    fontFamily: FONT.medium,
    fontSize: 10,
    color: COLOR.white,
    lineHeight: 12.6
  },
  Line: {
    height: .5,
    width: wp(100),
    backgroundColor: COLOR.lightPink,
    marginTop: hp(2.5)
  }
})