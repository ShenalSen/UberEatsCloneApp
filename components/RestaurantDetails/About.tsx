/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text,Image } from 'react-native'
import React from 'react'

const image = 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg';

const title = 'Farmhouse Kitchen Thai Cuisine';

const description = 'Thai • Comfort Food • $$ • 🎫 • 4⭐ (2913+)';

export default function About() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

type RestaurantImageProps = {
    image: string;
    
};

const RestaurantImage = (props: RestaurantImageProps) => (
    <Image source={{uri: props.image}} style={{ width: "100%", height: 180 }} />
)

type RestaurantTitleProps = {
    title: string;
};

const RestaurantTitle = (props: RestaurantTitleProps) => (
    <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>
      {props.title}
    </Text>
)

type RestaurantDescriptionProps = {
    description: string;
};

const RestaurantDescription = (props: RestaurantDescriptionProps) => (
    <Text style={{marginTop: 10, marginHorizontal: 15, fontWeight: "600", fontSize: 15.5}}>
      {props.description}
    </Text>
)