import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { BackArrow, CrossSvg, DiscountSvg, MicSvg, SeacrhSvg } from '../../assets/svg'
import { Dishes, Input, Pressable, RecommendationButton, Scrollable, SeeStories, SvgElement } from '../../components'
import { buttonTitles } from '../../data/local'
import { styles } from './style'

const NearYouShops = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = useState(null)
    const [selectedComponent, setSelectedComponent] = useState('stores')

    const renderComponent = () => {
        if (selectedComponent === 'stores') {
            return <SeeStories />
        } else if (selectedComponent === 'dishes') {
            return <Dishes />
        }
        return null
    }

    return (
        <View style={styles.container}>
            <Scrollable hasInput>

                {/* Header Card */}
                <View style={styles.topCard}>
                    <SvgElement
                        name={BackArrow}
                        style={styles.backIconStyle}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerLabel}>Showing stores near you</Text>
                    <Input
                        placeholder={`Try “biriyani”`}
                        addLeft={<SvgElement name={SeacrhSvg} />}
                        addRight={
                            <View style={styles.voiceContainer}>
                                <View style={styles.line} />
                                <SvgElement name={MicSvg} />
                            </View>
                        } />

                    {/* recommendation Buttons */}
                    <Scrollable horizontal>
                        <View style={styles.buttonContainer}>
                            {buttonTitles.map((item, index) => (
                                <RecommendationButton key={index} item={item} index={index} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                            ))}
                        </View>
                    </Scrollable>


                    <View style={styles.mapButtons}>
                        <Pressable onPress={() => setSelectedComponent('stores')}>
                            <Text style={selectedComponent === 'stores' ? styles.activeButton : styles.inactiveButton}>See Stores</Text>
                        </Pressable>
                        <Pressable onPress={() => setSelectedComponent('dishes')}>
                            <Text style={selectedComponent === 'dishes' ? styles.activeButton : styles.inactiveButton}>Dishes</Text>
                        </Pressable>
                    </View>

                </View>

                <View style={styles.secondCard}>
                    {renderComponent()}
                </View>

            </Scrollable>
        </View >
    )
}

export default NearYouShops
