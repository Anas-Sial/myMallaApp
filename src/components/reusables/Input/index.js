import React, { memo } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { emptyFunction } from '../../../utils/Helpers'
import { COLOR, hp, commonStyles, TEXT_STYLE, wp } from '../../../enums/StyleGuide'

const Input = (props) => {
    const { placeholder, keyboard, onChange, onSubmitPress = emptyFunction, value, addLeft, style, secureText, onFocus, onBlur, textStyle ,addRight} = props
    return (

        <View style={[styles.InputStyle, style]}>
            {addLeft}
            <TextInput
                style={[styles.Input, textStyle]}
                placeholder={placeholder}
                placeholderTextColor={COLOR.darkGray}
                keyboardType={keyboard}
                onChangeText={x => onChange && onChange(x)}
                value={value}
                secureTextEntry={secureText}
                onFocus={onFocus}
                autoCapitalize='none'
                onSubmitEditing={onSubmitPress}
                onBlur={onBlur} />
                 {addRight}
        </View>
    )
}

export default memo(Input)

const styles = StyleSheet.create({
    InputStyle: {
        height: hp(6),
        width: wp(90),
        paddingHorizontal: '5%',
        ...commonStyles.justifyView,
        alignSelf: 'center',
        backgroundColor: COLOR.offWhite,
        borderWidth: 1,
        borderColor: COLOR.lightGray,
        borderRadius: hp(1),
        marginVertical: hp(1.4),
    },
    Input: {
        flex: 1,
        ...TEXT_STYLE.textMedium,
        color: COLOR.black,
        marginLeft:wp(2)
    },
})
