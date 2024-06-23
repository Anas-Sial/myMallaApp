import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONT, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { foods, restaurantData } from '../../data/local'
import { Pressable, Scrollable } from '../reusables'
import RestaurantCard from '../RestaurantCard'

const Dishes = () => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [quantities, setQuantities] = useState({})

  const handleAddItem = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: 1,
    }))
  }

  const handleIncreaseItem = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }))
  }

  const handleDecreaseItem = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }))
  }
  return (
    <View style={styles.container}>

      <View style={styles.cardContainer}>

        <Scrollable horizontal>
          <View style={styles.buttonContainer}>
            {foods.map((item, index) => (
              <Pressable style={styles.ListContainer} key={index} onPress={() => setSelectedButton(index)}>
                <Image source={item?.image} style={styles.listImages} />
                <Text style={[styles.FoodNames, selectedButton === index && styles.selectedFoodNames]}>{item?.name}</Text>
              </Pressable>
            ))}
          </View>
        </Scrollable>

      </View>

      <View style={styles.cardList}>
        <FlatList
          data={restaurantData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <RestaurantCard
            restaurant={item} onAddItem={handleAddItem}
            onIncreaseItem={handleIncreaseItem}
            onDecreaseItem={handleDecreaseItem}
            quantities={quantities} />}
        />
      </View>

    </View >
  )
}

export default Dishes

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.white,
    ...commonStyles.shadow_3,
    paddingBottom: hp(2),
  },
  buttonContainer: {
    ...commonStyles.horizontalView,
    marginTop: hp(2)
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
  secondCard: {
    backgroundColor: COLOR.white,
    ...commonStyles.shadow_3,
    paddingBottom: hp(2),
    marginTop: hp(1.5)
  },
  cardList: {
    backgroundColor: COLOR.white,
    ...commonStyles.shadow_3,
    marginTop: hp(1.5)
  }
})