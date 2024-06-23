import { ImageBackground, Modal, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Pressable, Scrollable, SvgElement } from '../../components'
import { BackArrow, BlackCross, Contact, MarkerSvg, SeacrhSvg } from '../../assets/svg'
import { IMAGES } from '../../assets/images'
import { modalButtons } from '../../data/local'
import { SCREEN } from '../../enums/AppEnums'
import { styles } from './style'

const MapScreen = ({ route, navigation }) => {
    const address = route?.params
    const [visible, setVisible] = useState(false)
    const [selectedButton, setSelectedButton] = useState(null)
    const [locationForm, setLocationForm] = useState({})

    const handleFormChange = (key, value) => {
        setLocationForm({ ...locationForm, [key]: value })
    }

    const handleNavigate = () => {
        setVisible(false)
        navigation.navigate(SCREEN.ORDERSTATUS)
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={IMAGES.mapImage}>

                <View style={styles.inputContainer}>
                    <View style={styles.circleIcon}>
                        <SvgElement name={BackArrow} onPress={() => navigation.goBack()} />
                    </View>
                    <Input
                        style={styles.inputStyle}
                        placeholder={`Try Polo Ground, Manoj Cinema”`}
                        addLeft={<SvgElement name={SeacrhSvg} />}
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.locationContainer}>
                        <MarkerSvg />
                        <View style={styles.locationContent}>
                            <Text style={styles.location}>Burnpur Road, Court More</Text>
                            <Text style={styles.city}>Asansol</Text>
                        </View>
                    </View>

                    <Button
                        title={address ? 'Enter complete address' : 'Deliver Here'}
                        onPress={() => setVisible(true)}
                        style={styles.buttonStyle} />
                </View>

                {/* Modal */}
                <Modal
                    visible={visible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setVisible(true)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.ModalContainerStyling}>
                            <SvgElement name={BlackCross} style={styles.CrossButton} onPress={() => setVisible(false)} />
                            <Scrollable hasInput>
                                <Input placeholder='Name'
                                    style={[styles.inputStyle, locationForm.nameFocused && styles.focusedInput]}
                                    value={locationForm?.name}
                                    onFocus={() => handleFormChange('nameFocused', true)}
                                    onBlur={() => handleFormChange('nameFocused', false)}
                                    onChange={(x) => handleFormChange('name', x)}
                                    addRight={<Contact />} />

                                <Input placeholder='Phone Number'
                                    style={[styles.inputStyle, locationForm.phoneFocused && styles.focusedInput]}
                                    value={locationForm?.phone}
                                    onFocus={() => handleFormChange('phoneFocused', true)}
                                    onBlur={() => handleFormChange('phoneFocused', false)}
                                    onChange={(x) => handleFormChange('phone', x)} />

                                <Input placeholder='Enter complete address'
                                    style={[styles.inputStyle, locationForm.addressFocused && styles.focusedInput]}
                                    value={locationForm?.address}
                                    onFocus={() => handleFormChange('addressFocused', true)}
                                    onBlur={() => handleFormChange('addressFocused', false)}
                                    onChange={(x) => handleFormChange('address', x)} />

                                <Input placeholder='Apartment name and floor ( optional )'
                                    style={[styles.inputStyle, locationForm.floorFocused && styles.focusedInput]}
                                    value={locationForm?.floor}
                                    onFocus={() => handleFormChange('floorFocused', true)}
                                    onBlur={() => handleFormChange('floorFocused', false)}
                                    onChange={(x) => handleFormChange('floor', x)} />

                                <Input placeholder='Landmark nearby ( optional )'
                                    style={[styles.inputStyle, locationForm.markFocused && styles.focusedInput]}
                                    value={locationForm?.mark}
                                    onFocus={() => handleFormChange('markFocused', true)}
                                    onBlur={() => handleFormChange('markFocused', false)}
                                    onChange={(x) => handleFormChange('mark', x)} />

                                <Scrollable horizontal>
                                    <View style={styles.buttonContainer}>
                                        {modalButtons.map((item, index) => (
                                            <Pressable key={index}
                                                style={[styles.recommendButton, selectedButton === index && styles.selectedButton,]}
                                                onPress={() => setSelectedButton(index)}>
                                                <Text style={[styles.recommendLabel, selectedButton === index && styles.selectedlabel]}>
                                                    {item?.name}
                                                </Text>
                                            </Pressable>
                                        ))}
                                    </View>
                                </Scrollable>

                                <Button title='Deliver here and save address'
                                    onPress={() => handleNavigate()}
                                    style={styles.modalButton} />

                            </Scrollable>
                        </View>
                    </View>
                </Modal>

            </ImageBackground>
        </View>
    )
}

export default MapScreen
