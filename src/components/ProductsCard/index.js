import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DropDown, Pressable, SvgElement } from '../reusables'
import { COLOR, TEXT_STYLE, hp, wp, commonStyles, FONT } from '../../enums/StyleGuide'
import { HeartSvg, Star2 } from '../../assets/svg'
import { IMAGES } from '../../assets/images'

const ProductCard = ({ item, handleChange, selected, setShowModal, index }) => {
    return (
        <View style={styles.cardContainer2}>
            <View style={{ marginLeft: wp(4) }}>
                <View style={{ ...commonStyles.horizontalView }}>
                    <View style={styles.rattingContainer}>
                        <Text style={styles.ratingLabel}>{item.rating}</Text>
                        <SvgElement name={Star2} />
                    </View>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                </View>
                <Text style={styles.itemName}>{item.name}</Text>
                <DropDown
                    data={item.dropdownData}
                    value={selected && selected[index]}
                    onChange={(value) => handleChange(value, index)}
                    placeholder="Select"
                />
                <View style={styles.priceContainer}>
                    <Text style={styles.itemName}>{item.price}</Text>
                    <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
                </View>
            </View>
            <SvgElement name={HeartSvg} style={styles.heartIcon} />
            <Pressable style={styles.foodImageCard} onPress={() => setShowModal(true)}>
                <Image source={IMAGES.saleTag} style={styles.tagStyle} />
                <Image source={item.image} style={styles.itemImage} />
                <Pressable style={styles.addButton}>
                    <Text style={styles.addButtonLabel}>Add</Text>
                </Pressable>
            </Pressable>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    cardContainer2: {
        ...commonStyles.justifyView,
        borderBottomWidth:1,
        paddingBottom:hp(2),
        borderBottomColor:COLOR.primary

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
        marginTop: hp(2),
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
    line: {
        width: wp(100),
        alignSelf: 'center',
        height: .5,
        backgroundColor: COLOR.primary,
        marginTop: hp(1.8)
    },
    tagStyle: {
        width: hp(5.2),
        height: hp(5.2),
        position: 'absolute',
        right: wp(-5),
        top: hp(-2)
    },
})