import { ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { COLOR, TEXT_STYLE, hp, commonStyles, ACTIVE_OPACITY } from '../../../enums/StyleGuide'
import { emptyFunction } from '../../../utils/Helpers'

const Button = (props) => {
    const { style, onPress = emptyFunction, disabled, activeOpacity = ACTIVE_OPACITY, title, textStyle, isLoading, size = 'small' } = props
    return (
        <TouchableOpacity
            style={[styles.ButtonContainer, style]}
            onPress={onPress}
            activeOpacity={activeOpacity}
            disabled={disabled}
        >
            {isLoading ? (
                <ActivityIndicator color={COLOR.white} size={size} />
            ) : (
                <Text style={[styles.ButtonText, textStyle]}>{title}</Text>
            )
            }
        </TouchableOpacity>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    ButtonContainer: {
        height: hp(6),
        width: '92%',
        alignSelf: 'center',
        backgroundColor: COLOR.primary,
        ...commonStyles.center,
        borderRadius: hp(1),
    },
    ButtonText: {
        ...TEXT_STYLE.bigTextSemiBold,
        color: COLOR.white,
        lineHeight: 20.16
    },
})