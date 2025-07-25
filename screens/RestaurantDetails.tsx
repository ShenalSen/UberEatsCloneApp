/* eslint-disable react-native/no-inline-styles */
import { View} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import MenuItem from '../components/RestaurantDetails/MenuItem'

export default function RestaurantDetails() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <About />
      <Divider width={1.8} 
      style={{
        marginVertical: 20,
      }} />
    <MenuItem />
    </View>
  )
}