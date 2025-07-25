/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetails/About';
import MenuItem from '../components/RestaurantDetails/MenuItem';
import ViewCart from '../components/RestaurantDetails/ViewCart';

export default function RestaurantDetails({ route, navigation }: { route: any; navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <About route={route} />
      <Divider
        width={1.8}
        style={{
          marginVertical: 20,
        }}
      />
      <MenuItem restaurentName={route.params.name}/>
      <ViewCart navigation={navigation} restaurentName={route.params.name} />
    </View>
  );
}

