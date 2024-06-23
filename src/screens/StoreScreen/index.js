import { FlatList, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../enums/StyleGuide'
import { DropDown, FilterModel, Input, Pressable, ProductCard, ProductDetailModel, RecommendationButton, Scrollable, SvgElement } from '../../components'
import { BackArrow, ColoredCross, ColoredDiscount, SeacrhSvg, filter } from '../../assets/svg'
import { buttonTitles, dropDownData, foods, productList } from '../../data/local'
import { styles } from './style'

const StoreScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [selectedFood, setSelectedFood] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filterModel, setFilterModel] = useState(false)
  const [selected, setSelected] = useState({});
  const [selectedField, setSelectedFeild] = useState(null)

  const handleFieldChange = (value) => {
    setSelectedFeild(value)
  }
  const handleChange = (value, cardIndex) => {
    setSelected((prevState) => ({
      ...prevState,
      [cardIndex]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <Scrollable hasInput containerStyle={{ flex: 1 }}>

        {/* Header Card */}
        <View style={styles.topCard}>
          <SvgElement
            name={BackArrow}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerLabel}>Durga Groceries</Text>

          <View style={styles.inputContainer}>
            <Input
              style={styles.inputStyle}
              placeholder={`Try “biriyani”`}
              addLeft={<SvgElement name={SeacrhSvg} />}
            />
            <SvgElement name={filter} onPress={() => setFilterModel(true)} />
          </View>

          {/* recommendation Buttons */}
          <Scrollable horizontal>
            <View style={styles.buttonContainer}>
              {buttonTitles.map((item, index) => (
                <RecommendationButton key={index} item={item} index={index} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
              ))}
            </View>
          </Scrollable>

          {/* Delevery Fee */}
          <View style={styles.discountContainer}>
            <View style={{ ...commonStyles.horizontalView }}>
              <ColoredDiscount />
              <Text style={styles.discription}>Order for more than ₹300 to get free delivery</Text>
            </View>
            <SvgElement name={ColoredCross} />
          </View>

        </View>

        <View style={styles.cardContainer}>
          <Scrollable horizontal>
            <View style={styles.buttonContainer}>
              {foods.map((item, index) => (
                <Pressable style={styles.ListContainer} key={index} onPress={() => setSelectedFood(index)}>
                  <Image source={item?.image} style={styles.listImages} />
                  <Text style={[styles.FoodNames, selectedFood === index && styles.selectedFoodNames]}>{item?.name}</Text>
                </Pressable>
              ))}
            </View>
          </Scrollable>
        </View>

        <View style={styles.subContainer}>
          <FlatList
            data={productList}
            renderItem={({ item, index }) => <ProductCard
              item={item}
              index={index}
              handleChange={handleChange}
              selected={selected}
              setShowModal={setShowModal}
            />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>


        {/* Product Detail Modal */}
        <ProductDetailModel
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          foodName={'Chicken Biriyani'}
          rating='4.2'
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`}
          buttonTitle='Full Plate'
          discountedPrice='450.00'
          orignalPrice='650'
          onAddPress={() => { }}
          addDropDown={
            <DropDown
              data={dropDownData}
              value={selectedField}
              onChange={handleFieldChange}
              placeholder="Select"
            />
          } />

        {/* FilterModel */}
        <FilterModel
          visible={filterModel}
          onRequestClose={() => setFilterModel(false)} />

      </Scrollable>
    </View>
  )
}

export default StoreScreen

