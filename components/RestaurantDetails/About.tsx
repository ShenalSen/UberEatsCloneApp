/* eslint-disable react-native/no-inline-styles */

import { View, Text, Image } from 'react-native'
import React from 'react'

type AboutProps = {
  route: {
    params: {
      name: string;
      image: string;
      price: string;
      reviews: number;
      rating: number;
      categories: string;
    }
  }
};

export default function About({ route }: AboutProps) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const description = `${categories} • ${price} • 🎫 • ${rating}⭐ (${reviews}+)`;

  return (
    <View style={{ backgroundColor: 'white' }}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

type RestaurantImageProps = {
  image: string;
};

const RestaurantImage = (props: RestaurantImageProps) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

type RestaurantTitleProps = {
  title: string;
};

const RestaurantTitle = (props: RestaurantTitleProps) => (
  <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>
    {props.title}
  </Text>
);

type RestaurantDescriptionProps = {
  description: string;
};

const RestaurantDescription = (props: RestaurantDescriptionProps) => (
  <Text style={{ marginTop: 10, marginHorizontal: 15, fontWeight: "600", fontSize: 15.5 }}>
    {props.description}
  </Text>
);