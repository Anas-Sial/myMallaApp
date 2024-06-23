import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlackCross } from '../../assets/svg'
import { SvgElement } from '../reusables'
import { COLOR, hp, wp, FONT } from '../../enums/StyleGuide'

const FilterModel = (props) => {
    const { visible, onRequestClose } = props
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onRequestClose}>
            <View style={styles.container}>
                <View style={styles.ModalContainerStyling}>
                    <SvgElement name={BlackCross} style={styles.CrossButton} onPress={onRequestClose} />
                    <Text style={styles.FilterLabel}>Filter</Text>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModel

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
    FilterLabel:{
        
    }
})