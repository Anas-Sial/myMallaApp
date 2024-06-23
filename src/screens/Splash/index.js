import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR, commonStyles, hp } from '../../enums/StyleGuide'
import { IMAGES } from '../../assets/images'
import { SCREEN } from '../../enums/AppEnums'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(SCREEN.BOTTOMTAB)
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={IMAGES.splashImage} style={styles.imageStyle} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        ...commonStyles.center
    },
    imageStyle: {
        width: hp(20),
        height: hp(23),
        resizeMode: 'contain'
    }
})