/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
  <View style={{ position: 'relative' }}>
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);
