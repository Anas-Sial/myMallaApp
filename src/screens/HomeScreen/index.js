import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { MicSvg, SeacrhSvg, SeeAllSvg } from '../../assets/svg'
import { BestSellingItems, FoodCategories, HomeHeader, Input, NearbyStores, Pressable, Scrollable, SvgElement } from '../../components'
import { IMAGES } from '../../assets/images'
import { bestSellings, nearbyStores, resturantFood } from '../../data/local'
import { styles } from './style'

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Scrollable>

                <View style={styles.topCard}>
                    <HomeHeader
                        onBackPress={() => navigation.goBack()}
                        resturantName='Foods'
                        location='Court More, Burnpur'
                        foodImage={IMAGES.foodImage} />

                    <Input
                        placeholder={`Search for “biriyani”`}
                        addLeft={<SvgElement name={SeacrhSvg} />}
                        addRight={
                            <View style={styles.voiceContainer}>
                                <View style={styles.line} />
                                <SvgElement name={MicSvg} />
                            </View>
                        } />
                </View>

                {/* Foods List */}
                <View style={styles.secondCard}>

                    <View style={styles.cravingHeader}>
                        <Text style={styles.headingLabel}>What you are craving for</Text>
                        <View style={styles.horizontalLine} />
                    </View>

                    <FlatList
                        data={resturantFood}
                        numColumns={4}
                        renderItem={({ item, index }) => (
                            <FoodCategories item={item} index={index} />
                        )}
                        keyExtractor={item => item.key}
                    />

                    <Pressable style={styles.categoriesContainer}>
                        <Text style={styles.categorylabel}>See all categories</Text>
                        <SvgElement name={SeeAllSvg} style={styles.categoryIcon} />
                    </Pressable>

                </View>


                {/* Selling Card */}
                <View style={styles.secondCard}>
                    <Image source={IMAGES.bestSellingLabel} style={styles.bestSelling} />
                    <FlatList
                        data={bestSellings}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index }) => (
                            <BestSellingItems item={item} index={index} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

                {/* Nearby Stores */}

                <View style={styles.secondCard}>
                    <View style={styles.cravingHeader}>
                        <Text style={styles.headingLabel}>Stores near you</Text>
                        <View style={styles.horizontalLine} />
                    </View>

                    <FlatList
                        data={nearbyStores}
                        renderItem={({ item, index }) => (
                            <NearbyStores item={item} index={index} />
                        )}
                        keyExtractor={item => item.id}
                    />

                    <Image source={IMAGES.thatsit} style={styles.thatisLabel} />

                    <Image source={IMAGES.satisfyImage} style={styles.satisfyLabel} />

                </View>

            </Scrollable>
        </View>
    )
}

export default HomeScreen
