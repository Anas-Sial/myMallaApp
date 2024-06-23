import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles, hp, wp } from '../../../enums/StyleGuide'
import { Dropdown } from 'react-native-element-dropdown'

const DropDown = (props) => {
    const { data, search, labelField = 'label', valueField = 'value', placeholder, value, onChange, searchPlaceholder, style, onBlur, onFocus, dropdownPosition } = props

    const renderItem = (item) => {
        const isSelected = item[valueField] === value
        return (
            <View style={styles.itemContainerStyle}>
                <Text style={[styles.itemTextStyle, isSelected && { color: COLOR.white }]}>
                    {item[labelField]}
                </Text>
            </View>
        )
    }

    const handleChange = (item) => {
        onChange(item)
    }

    return (
        <Dropdown
            style={[styles.dropdown, style]}
            activeColor={COLOR.lightGray}
            placeholderStyle={styles.placeholderStyle}
            renderItem={renderItem}
            itemContainerStyle={styles.itemContainerStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search={search}
            maxHeight={hp(30)}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            dropdownPosition={dropdownPosition}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default memo(DropDown)

const styles = StyleSheet.create({
    dropdown: {
        width: wp(34),
        height: hp(3.5),
        borderWidth: 1,
        borderColor: COLOR.black,
        ...commonStyles.justifyView,
        paddingHorizontal: wp(2.5),
        borderRadius: .5,
        marginTop: hp(1)
    },
    placeholderStyle: {
        color: COLOR.black,
        ...TEXT_STYLE.smallTextMedium
    },
    itemContainerStyle: {
        paddingHorizontal: hp(1),
        paddingVertical: hp(.8),
    },
    itemTextStyle: {
        color: COLOR.black,
        fontSize: 12
    },
    selectedTextStyle: {
        color: COLOR.black,
        ...TEXT_STYLE.smallText
    },
    iconStyle: {
        width: 22,
        height: 22,
        tintColor: COLOR.black
    },
    inputSearchStyle: {
        height: hp(4.8),
        fontSize: 10,
        fontFamily: FONT.regular,
        color: COLOR.black
    },
})