import { Image, Modal, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackArrow, Cross3, DeliverdIcon, DownloadSvg, HeartSvg, HomeIcon } from '../../assets/svg'
import { BillCard, Pressable, Scrollable, SvgElement } from '../../components'
import { IMAGES } from '../../assets/images'
import { Rating } from 'react-native-ratings';
import { styles } from './style'
import { hp } from '../../enums/StyleGuide'

const OrderSummary = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const [rating, setRating] = useState(1)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <View style={styles.container}>
      <Scrollable>

        <View style={styles.topCard}>
          <SvgElement
            name={BackArrow}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />

          <View style={styles.justifyView}>
            <Text style={styles.headerLabel}>Cart</Text>
            <Text style={styles.helpLabel}>Help</Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.resturantName}>Punjabi Rasoi</Text>
            <SvgElement name={HeartSvg} />
          </View>
          <Text style={styles.dealLabel}>Deals in Food</Text>
          <Text style={styles.description}>Court More, Opposite Orodental Hospital Asansol</Text>
          <Pressable style={styles.downloadContainer}>
            <Text style={styles.downloadLabel}>Download Invoice</Text>
            <DownloadSvg />
          </Pressable>
          <View style={styles.dotedLine} />

          <Text style={styles.deliver}>Delivered to </Text>

          <View style={styles.addressContainer}>
            <View style={styles.address}>
              <HomeIcon />
              <Text style={styles.addressTitle}>Home</Text>
            </View>
            <Text style={styles.addressLabel}>Saumik Sarkar, 8250292291 Tirupati Complex Court More, Asansol</Text>
          </View>

          <Pressable style={styles.successContainer}>
            <DeliverdIcon />
            <Text style={styles.successLabel}>Delivered Successfully</Text>
          </Pressable>
          <Text style={styles.orderDetail}>Your ordered has been delivered on June 23   02:50 PM by Mandeep Singh</Text>

          <View style={styles.billContainer}>
            <Text style={styles.billLabel}>Bill Details</Text>
          </View>
          <View style={styles.productPrice}>
            <Text style={styles.foodName}>Chicken Biriyani{"    "}
              <Text style={styles.quantity}>x 1</Text>
            </Text>
            <Text style={styles.foodName}>₹2550.00</Text>
          </View>

          <BillCard
            style={styles.billStyle}
            tax='50.00'
            deliveryCharges='20.00'
            instantOrder='30.00' />

          <View style={[styles.productPrice, styles.BorderBottom]}>
            <Text style={styles.payBy}>Pay by COD  <Text style={styles.paidLabel}>(paid)</Text></Text>
            <Text style={styles.foodName}>₹2550.00</Text>
          </View>

          {/* Bottom */}
          <View style={styles.bottomContent}>
            <Pressable>
              <Text style={styles.reorder}>Reorder</Text>
            </Pressable>
            <Image source={IMAGES.foodImage} style={styles.foodImageStyle} />
            <Text style={styles.messageLabel}>Keep enjoying your food</Text>
          </View>
        </View>

      </Scrollable>

      {/* RatingModel */}
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.ModalContainerStyling}>
            <Text style={styles.modelHeader}>How was your delivery{'\n'}experience</Text>
            <SvgElement name={Cross3} style={styles.iconStyle} onPress={() => setVisible(false)} />
            <View style={styles.RatingContainer}>
              <Rating type="star" ratingCount={5} imageSize={hp(4)} startingValue={rating} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default OrderSummary

