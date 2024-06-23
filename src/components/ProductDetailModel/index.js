import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Pressable, SvgElement } from '../reusables'
import { ArrowDown, BlackCross, HeartSvg, Star2 } from '../../assets/svg'
import { hp, FONT, COLOR, TEXT_STYLE, commonStyles, wp } from '../../enums/StyleGuide'
import { IMAGES } from '../../assets/images'

const ProductDetailModel = (props) => {
    const { visible, onRequestClose, foodName, rating, description, buttonTitle, discountedPrice, orignalPrice, onAddPress, addDropDown } = props

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onRequestClose}>
            <View style={styles.container}>
                <View style={styles.ModalContainerStyling}>
                    <SvgElement name={BlackCross} style={styles.CrossButton} onPress={onRequestClose} />
                    <Image source={IMAGES.handiImage2} style={styles.modelImage} />
                    <View style={{ ...commonStyles.horizontalView, marginTop: hp(2.6) }}>
                        <Text style={styles.itemModalName}>{foodName}</Text>
                        <View style={styles.rattingModelContainer}>
                            <Text style={styles.ratingModelLabel}>{rating}</Text>
                            <SvgElement name={Star2} />
                        </View>
                        <View style={styles.dotModalContainer}>
                            <View style={styles.dotModal} />
                        </View>
                    </View>
                    <Text style={styles.discriptionModel}>{description}</Text>
                    <View style={styles.dropDownContainer}>
                        {/* <Pressable style={styles.menuContainer}>
                            <Text style={styles.menuLabel}>{buttonTitle}</Text>
                            <ArrowDown />
                        </Pressable> */}
                        {addDropDown}
                        <SvgElement name={HeartSvg} style={styles.heartIcon} />
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemModalName}>₹{discountedPrice}</Text>
                        <Text style={styles.discountedPrice}>₹{orignalPrice}</Text>
                    </View>

                    <Button title='Add'
                        onPress={onAddPress}
                        style={styles.addbutton}
                        textStyle={styles.addLabel} />
                </View>
            </View>
        </Modal>
    )
}

export default ProductDetailModel

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: '#000000aa'
    },
    ModalContainerStyling: {
        height: hp(56),
        width: wp(100),
        backgroundColor: COLOR.white,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    CrossButton: {
        position: 'absolute',
        alignSelf: 'center',
        top: hp(-6),
    },
    modelImage: {
        width: hp(20),
        height: hp(20),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: hp(2)
    },
    itemModalName: {
        ...TEXT_STYLE.bigTextSemiBold,
        color: COLOR.dark,
        marginLeft: wp(5)
    },
    rattingModelContainer: {
        height: hp(2.3),
        width: wp(11.4),
        borderRadius: hp(.5),
        backgroundColor: COLOR.lightPink,
        ...commonStyles.justifyView,
        paddingHorizontal: wp(1.8),
        marginLeft: wp(3)
    },
    ratingModelLabel: {
        fontFamily: FONT.medium,
        fontSize: 10,
        color: COLOR.primary,
        lineHeight: 12.6
    },
    dotModalContainer: {
        backgroundColor: COLOR.gray_2,
        height: hp(2.3),
        width: hp(2.3),
        borderRadius: hp(.3),
        ...commonStyles.center,
        marginLeft: wp(2)
    },
    dotModal: {
        backgroundColor: COLOR.red,
        height: hp(.8),
        width: hp(.8),
        borderRadius: hp(.8) / 2
    },
    discriptionModel: {
        fontSize: 10,
        fontFamily: FONT.regular,
        color: COLOR.darkGray,
        lineHeight: 12.6,
        marginLeft: wp(5),
        width: wp(90),
        marginTop: hp(.5)
    },
    dropDownContainer: {
        ...commonStyles.horizontalView,
        marginLeft: wp(5),
        marginTop: hp(1)
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
    heartIcon: {
        marginLeft: wp(6),
        marginTop: hp(.7)
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
    addbutton: {
        marginTop: hp(3),
        backgroundColor: COLOR.light,
        borderColor: COLOR.primary,
        borderWidth: 1
    },
    addLabel: {
        color: COLOR.primary
    }
})