import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'
import { Pressable, Scrollable, SvgElement } from '../reusables'
import { Minus, Plus, WhiteStar } from '../../assets/svg'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../enums/AppEnums'

const RestaurantCard = ({ restaurant, onAddItem, onIncreaseItem, onDecreaseItem, quantities }) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.secondCard}>
                <View style={styles.cardHeader}>
                    <View style={styles.nameRating}>
                        <Text style={styles.resturantName}>{restaurant.name}</Text>
                        <View style={styles.rattingContainer}>
                            <Text style={styles.ratingLabel}>{restaurant.rating}</Text>
                            <SvgElement name={WhiteStar} />
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate(SCREEN.STORESCREEN)}>
                        <Text style={styles.storeLabel}>Open store</Text>
                    </Pressable>
                </View>
                <Text style={styles.DescriptionLabel}>{restaurant.address}</Text>
                <Scrollable horizontal>
                    <View style={styles.buttonContainer}>
                        {restaurant.items.map((item) => (
                            <View key={item.id} style={{ width: wp(28), alignItems: 'center', marginLeft: wp(4) }}>
                                <Image source={IMAGES.handiImage} style={styles.imageStyle} />
                                <View>
                                    <Text style={styles.itemName}>{item.itemName}</Text>
                                    <Text style={styles.weight}>{item.weight}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <Text style={styles.orignalPrice}>{item.originalPrice}</Text>
                                </View>
                                {quantities[item.id] > 0 ? (
                                    <View style={styles.counterContainer}>
                                        <Pressable onPress={() => onDecreaseItem(item.id)}>
                                            <Minus />
                                        </Pressable>
                                        <Text style={styles.counterLabel}>{quantities[item.id]}</Text>
                                        <Pressable onPress={() => onIncreaseItem(item.id)}>
                                            <Plus />
                                        </Pressable>

                                    </View>

                                ) : (
                                    <Pressable onPress={() => onAddItem(item.id)} style={styles.addButton}>
                                        <Text style={styles.addButtonLabel}>Add</Text>
                                    </Pressable>
                                )}
                            </View>
                        ))}
                    </View>
                </Scrollable>
            </View>
            <View style={styles.Line} />
        </>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    secondCard: {
        paddingBottom: hp(2),
        marginTop: hp(1.5)
    },
    buttonContainer: {
        ...commonStyles.horizontalView,
        marginTop: hp(2)
    },
    resturantName: {
        ...TEXT_STYLE.textBold,
        color: COLOR.black,
        lineHeight: 17.64
    },
    cardHeader: {
        ...commonStyles.justifyView,
        width: wp(90),
        alignSelf: 'center',
        marginTop: hp(2.5)
    },
    nameRating: {
        ...commonStyles.horizontalView
    },
    rattingContainer: {
        height: hp(2.2),
        width: wp(9.5),
        borderRadius: hp(5),
        backgroundColor: COLOR.primary,
        ...commonStyles.justifyView,
        paddingHorizontal: wp(1.8),
        marginLeft: wp(2.5)
    },
    ratingLabel: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.white,
        lineHeight: 12.6
    },
    storeLabel: {
        fontFamily: FONT.bold,
        color: COLOR.primary,
        fontSize: 10,
    },
    DescriptionLabel: {
        fontFamily: FONT.medium,
        color: COLOR.black,
        fontSize: 10,
        width: wp(60),
        marginTop: hp(.4),
        marginLeft: wp(5)
    },
    imageStyle: {
        width: hp(13.1),
        height: hp(12.8),
    },
    itemName: {
        fontFamily: FONT.regular,
        color: COLOR.darkGray,
        fontSize: 10,
    },
    weight: {
        fontFamily: FONT.regular,
        fontSize: 10,
        color: COLOR.gray,
        marginTop: hp(.4)
    },
    price: {
        ...TEXT_STYLE.smallTextMedium,
        color: COLOR.dark,
        marginTop: hp(.2)
    },
    orignalPrice: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.red,
        textDecorationLine: 'line-through'
    },
    addButton: {
        width: wp(16),
        paddingVertical: hp(.3),
        ...commonStyles.center,
        backgroundColor: COLOR.light,
        borderWidth: 1,
        borderColor: COLOR.primary,
        borderRadius: hp(.7),
        marginTop: hp(1)
    },
    addButtonLabel: {
        ...TEXT_STYLE.smallTextBold,
        color: COLOR.primary,
        lineHeight: 15.12
    },
    Line: {
        height: .5,
        width: wp(90),
        alignSelf: 'center',
        backgroundColor: COLOR.gray,
        marginTop: hp(2.5)
    },
    counterContainer: {
        ...commonStyles.justifyView,
        backgroundColor: COLOR.primary,
        borderRadius: hp(.7),
        marginTop: hp(1),
        width: wp(16),
        height: hp(3),
        paddingHorizontal: wp(2)
    },
    counterLabel: {
        fontSize: 12,
        color: COLOR.white,
        fontFamily: FONT.semiBold
    },
})