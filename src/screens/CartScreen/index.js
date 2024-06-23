import { Image, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../../enums/StyleGuide'
import { BillCard, Button, Pressable, Scrollable, SvgElement } from '../../components'
import { ArrowDown, BackArrow, Edit, HomeIcon } from '../../assets/svg'
import { IMAGES } from '../../assets/images'
import { SCREEN } from '../../enums/AppEnums'
import { styles } from './style'

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Scrollable>

                {/* Header */}
                <View style={styles.topCard}>
                    <SvgElement
                        name={BackArrow}
                        style={styles.backIconStyle}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerLabel}>Cart</Text>
                    <Text style={styles.resturantName}>Punjab Rasoi</Text>
                    <Text style={styles.discription}>Court More, Opposite Orodental Hospital Asansol</Text>

                    {/* Bill Details */}
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

                    <View style={[styles.productPrice, { marginTop: hp(1.4) }]}>
                        <Text style={styles.payBy}>Pay by COD</Text>
                        <Text style={styles.foodName}>₹2550.00</Text>
                    </View>
                    <Text style={styles.Deliverto}>Deliver to </Text>

                    <View style={styles.addressContainer}>
                        <View style={styles.subContainer}>
                            <View style={styles.address}>
                                <HomeIcon />
                                <Text style={styles.addressTitle}>Home</Text>
                            </View>
                            <SvgElement name={Edit} />
                        </View>
                        <Text style={styles.addressLabel}>Saumik Sarkar, 8250292291 Tirupati Complex Court More, Asansol</Text>
                    </View>

                </View>

                {/* instructions */}
                <View style={styles.instructionCard}>
                    <Text style={styles.information}>You cannot cancel your order after 5 mins after the restaurant has accepted your order. No refund will be processed after that</Text>
                    <Text style={styles.policyLabel}>View our Refund and Replace Policy</Text>

                </View>

                {/* BottomCard */}
                <View style={styles.bottomCard}>
                    <View style={styles.subContainer}>
                        <View style={styles.address}>
                            <Text style={styles.payTitle}>Pay using</Text>
                            <ArrowDown />
                        </View>
                        <Text style={styles.changelabel}>Change</Text>
                    </View>
                    <View style={styles.payContainer}>
                        <Image source={IMAGES.gPay} style={styles.payImage} />
                        <Text style={styles.googlePaylabel}>Google Pay UPI</Text>
                    </View>

                    <Button title='Place order'
                        onPress={() => navigation.navigate(SCREEN.CHOOSELOCATION)}
                        style={styles.buttonStyle} />
                </View>

            </Scrollable>
        </View>
    )
}

export default CartScreen

