import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BlackCross } from '../../assets/svg'
import { Button, SvgElement } from '../reusables'
import { COLOR, hp, wp, FONT, commonStyles, TEXT_STYLE } from '../../enums/StyleGuide'
import CheckBox from '@react-native-community/checkbox'

const FilterModel = (props) => {
    const { visible, onRequestClose } = props
    const [filters, setFilters] = useState({
        offers: false,
        discounts: false,
        combo: false,
        topRated: false,
        veg: false,
        nonVeg: false,
        priceHighToLow: false,
        priceLowToHigh: false,
    });

    const toggleFilter = (filter) => {
        setFilters({ ...filters, [filter]: !filters[filter] });
    }
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
                    <ScrollView>
                        <Text style={styles.filterGroupHeader}>Type</Text>
                        <View style={styles.filterGroup}>
                            <CheckBox
                                value={filters.offers}
                                onValueChange={() => toggleFilter('offers')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Offers</Text>
                            <CheckBox
                                value={filters.discounts}
                                onValueChange={() => toggleFilter('discounts')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Discounts</Text>
                            <CheckBox

                                value={filters.combo}
                                onValueChange={() => toggleFilter('combo')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Combo</Text>
                        </View>
                        <Text style={styles.filterGroupHeader}>Ratings</Text>
                        <View style={styles.filterGroup}>
                            <CheckBox
                                value={filters.topRated}
                                onValueChange={() => toggleFilter('topRated')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Top Rated</Text>
                        </View>
                        <Text style={styles.filterGroupHeader}>Sub type</Text>
                        <View style={styles.filterGroup}>
                            <CheckBox
                                value={filters.veg}
                                onValueChange={() => toggleFilter('veg')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Veg</Text>
                            <CheckBox
                                value={filters.nonVeg}
                                onValueChange={() => toggleFilter('nonVeg')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Nonveg</Text>

                        </View>
                        <Text style={styles.filterGroupHeader}>Price</Text>
                        <View style={styles.filterGroup}>
                            <CheckBox
                                value={filters.priceHighToLow}
                                onValueChange={() => toggleFilter('priceHighToLow')}
                            />
                            <Text style={styles.checkboxLabel}>PriceHighToLow</Text>

                            <CheckBox
                                value={filters.priceLowToHigh}
                                onValueChange={() => toggleFilter('priceLowToHigh')}
                                tintColors={{ true: COLOR.primary, false: COLOR.black }}
                            />
                            <Text style={styles.checkboxLabel}>Lowest to highest</Text>

                        </View>

                        <View style={styles.buttonContainer}>
                            <Button title='Reset'
                                style={styles.resetButton}
                                textStyle={styles.resetLabel} />
                            <Button title='Apply'
                                style={styles.applyButton} />
                        </View>
                    </ScrollView>
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
    FilterLabel: {
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
        fontSize: 18,
        marginLeft: wp(4),
        marginTop: hp(4),
        marginBottom: hp(1.5)
    },
    filterGroupHeader: {
        ...TEXT_STYLE.textMedium,
        color: COLOR.darkGray,
        marginLeft: wp(4),
        marginTop: hp(1.5)

    },
    filterGroup: {
        ...commonStyles.horizontalView,
        marginLeft: wp(3),
        marginTop: hp(.5)
    },
    checkboxLabel: {
        ...TEXT_STYLE.text,
        color: COLOR.black
    },
    buttonContainer: {
        ...commonStyles.justifyView_m2,
        width: wp(92),
        alignSelf: 'center'
    },
    applyButton: {
        width: wp(42)
    },
    resetButton: {
        width: wp(42),
        borderWidth:1,
        borderColor:COLOR.primary,
        backgroundColor:COLOR.light
    },
    resetLabel:{
        color:COLOR.primary
    }

})