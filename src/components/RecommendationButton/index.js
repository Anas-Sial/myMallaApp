import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Pressable, SvgElement } from '../reusables'
import { CrossSvg, DiscountSvg } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../enums/StyleGuide'

const RecommendationButton = ({ item, index, selectedButton, setSelectedButton }) => {
    return (
        <Pressable
            key={index}
            style={[
                styles.recommendButton,
                selectedButton === index && styles.selectedButton,
            ]}
            onPress={() => setSelectedButton(index)}>
            {selectedButton === index && <SvgElement name={DiscountSvg} />}
            <Text style={[styles.recommendLabel, selectedButton === index && styles.selectedlabel]}>
                {item?.name}
            </Text>
            {selectedButton === index && <SvgElement name={CrossSvg} />}
        </Pressable>
    )
}

export default RecommendationButton

const styles = StyleSheet.create({
    recommendButton: {
        paddingHorizontal: wp(2),
        height: hp(3.2),
        borderWidth: 1,
        borderColor: COLOR.black,
        ...commonStyles.center,
        borderRadius: hp(.5),
        marginLeft: wp(4),
        ...commonStyles.justifyView
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
})