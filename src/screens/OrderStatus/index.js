import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import { BillCard, CardHeader, Pressable, Scrollable, SvgElement } from '../../components'
import { BackArrow, Call } from '../../assets/svg'
import { SCREEN } from '../../enums/AppEnums'
import * as Progress from 'react-native-progress'
import { styles } from './style'

const OrderStatus = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={IMAGES.mapImage}>

                <View style={styles.circleIcon}>
                    <SvgElement name={BackArrow} onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.cardContainer}>
                    <Scrollable>

                        <CardHeader orderId='987656345362'
                            dateAndTime='12.03.2023  02:30 pm'
                            duration='20 min'
                            onHelpPress={() => { }}
                        />

                        <Pressable style={styles.infoContainer} onPress={() => navigation.navigate(SCREEN.SUMMARY)}>
                            <Image source={IMAGES.grocerImage} style={styles.storeImage} />
                            <View style={{ marginLeft: wp(3) }}>
                                <Text style={styles.resturantName}>Durga Groceries</Text>
                                <Text style={styles.discription}>Your order is being cooked</Text>
                            </View>
                        </Pressable>

                        <Progress.Bar progress={0.4} width={wp(92)} style={styles.progressbar} height={hp(.8)} color={COLOR.primary} />

                        <View style={styles.infoContainer2}>
                            <View style={styles.subContainer}>
                                <Image source={IMAGES.grocerImage} style={styles.riderImage} />
                                <View style={{ marginLeft: wp(3) }}>
                                    <Text style={styles.riderName}>Mandeep Singh</Text>
                                    <Text style={styles.rideDisc}>Delivering your order</Text>
                                </View>
                            </View>
                            <SvgElement name={Call} />
                        </View>

                        <View style={styles.line} />

                        <View style={styles.bottomContainer}>
                            <View style={styles.billContainer}>
                                <Text style={styles.billLabel}>Bill Details</Text>
                            </View>
                            <View style={styles.productPrice}>
                                <Text style={styles.foodName}>Chicken Biriyani{"    "}
                                    <Text style={styles.quantity}>x 1</Text>
                                </Text>
                                <Text style={styles.foodName}>₹2550.00</Text>
                            </View>
                            <Pressable>
                                <Text style={styles.addLabel}>Add more </Text>
                            </Pressable>

                            <BillCard tax='50.00'
                                deliveryCharges='20.00'
                                instantOrder='30.00' />

                            <View style={[styles.productPrice, styles.BorderBottom]}>
                                <Text style={styles.payBy}>Pay by COD  <Text style={styles.paidLabel}>(paid)</Text></Text>
                                <Text style={styles.foodName}>₹2550.00</Text>
                            </View>
                            <Text style={[styles.labelStyle, { marginTop: hp(.6) }]}>Delivering to</Text>
                            <Text style={styles.location}>Saumik Sarkar, 8250292291 Tirupati Complex Court More, Asansol</Text>

                        </View>
                    </Scrollable>
                </View>

            </ImageBackground>
        </View>
    )
}

export default OrderStatus
