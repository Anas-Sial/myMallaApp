import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { Pressable, SvgElement } from '../../components'
import { AddUserSvg, BackArrow, BagSvg, DeleteIcon, Edit, HomeIcon, Plus2, TargetSvg } from '../../assets/svg'
import { addresses } from '../../data/local'
import { styles } from './style'
import { SCREEN } from '../../enums/AppEnums'

const ChooseLocation = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.addressContainer}>
            <View style={styles.address}>
                {item?.location == 'Home' ? <HomeIcon /> : item?.location == 'Office' ? <BagSvg /> : null}
                <Text style={styles.addressTitle}>{item?.location}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.addressLabel}>{item?.address}</Text>
                <View style={styles.iconContainer}>
                    <SvgElement name={DeleteIcon} />
                    <SvgElement name={Edit} />
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text>ChooseLocation</Text>

            <SvgElement
                name={BackArrow}
                style={styles.backIconStyle}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerLabel}>Choose delivery location</Text>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate(SCREEN.MAPSCREEN)}>
                <TargetSvg />
                <Text style={styles.buttonTitle}>Use current location</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate(SCREEN.MAPSCREEN, { address: true })}>
                <Plus2 />
                <Text style={styles.buttonTitle}>Use current location</Text>
            </Pressable>
            <Pressable style={styles.addUserButton}>
                <AddUserSvg />
                <Text style={styles.buttonTitle}>Use current location</Text>
            </Pressable>

            <Text style={styles.savedLabel}>Saved Address</Text>

            <FlatList
                data={addresses}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default ChooseLocation
