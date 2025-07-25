/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurents = [
  {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image_url:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    categories: ['Thai', 'Asian'],
    price: '$$',
    reviews: 1200,
    rating: 4.5,
  },
  {
    name: 'Pizza Place',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s',
    categories: ['Italian', 'Pizza'],
    price: '$$',
    reviews: 800,
    rating: 4.2,
  },
  {
    name: 'Sushi World',
    image_url:
      'https://seafoodbysykes.com/wp-content/uploads/Smoked-salmon-vegetable-sushi-500x500.jpg',
    categories: ['Japanese', 'Sushi'],
    price: '$$$',
    reviews: 500,
    rating: 4.8,
  },
  {
    name: 'Burger Joint',
    image_url: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    categories: ['American', 'Burgers'],
    price: '$',
    reviews: 1500,
    rating: 4.0,
  },
  {
    name: 'Vegan Delights',
    image_url:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    categories: ['Vegan', 'Healthy'],
    price: '$$',
    reviews: 600,
    rating: 4.6,
  },
  {
    name: 'Dessert Haven',
    image_url:
      'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Rlc3NlcnRzLXVwZGF0ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',
    categories: ['Desserts', 'Cakes'],
    price: '$',
    reviews: 300,
    rating: 4.9,
  },
  {
    name: 'Spicy Indian',
    image_url:
      'https://www.holidify.com/images/cmsuploads/compressed/curry-delicious-food-delicious-indian-food-indian-cuisine-1026688_20200116131914.jpg',
    categories: ['Indian', 'Spicy'],
    price: '$$',
    reviews: 900,
    rating: 4.3,
  },
];

interface Restaurant {
  name: string;
  image_url: string;
  categories: string[];
  price: string;
  reviews: number;
  rating: number;
}

interface RestaurantItemsProps {
  restaurentData: Restaurant[];
  navigation: any; 
}

export default function RestaurantItems(props: RestaurantItemsProps) {
  return (
    <>
      {props.restaurentData.map((restaurant: Restaurant) => (
        <TouchableOpacity
          key={restaurant.name} 
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() => props.navigation.navigate('RestaurantDetails', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.reviews,
            rating: restaurant.rating,
            categories: restaurant.categories.join(', ')
          })}
        >
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              padding: 15,
            }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

interface RestaurantImageProps {
  image: string;
}
const RestaurantImage: React.FC<RestaurantImageProps> = ({ image }) => (
  <View style={{ position: 'relative' }}>
    <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);

interface RestaurantInfoProps {
  name: string;
  rating: number;
}
const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ name, rating }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
