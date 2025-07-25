/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

const foods = [
  {
    title: 'Lasagna',
    description:
      'A classic Italian dish made with layers of pasta, meat, cheese, and tomato sauce.',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'A popular Indian dish featuring marinated chicken cooked in a tandoor oven',
    price: '$14.99',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhxl5UJpkNFa4z7ueSI3xie8jVppvNKGP-A&s',
  },
  {
    title: 'Sushi Platter',
    description: 'An assortment of fresh sushi rolls, sashimi, and nigiri.',
    price: '$19.99',
    image: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
  },
  {
    title: 'Chicken Fajitas',
    description:
      'Sizzling chicken strips served with peppers, onions, and warm tortillas.',
    price: '$11.99',
    image:
      'https://images.pexels.com/photos/32371282/pexels-photo-32371282.jpeg',
  },
  {
    title: 'Vegetable Stir-Fry',
    description:
      'A colorful mix of seasonal vegetables stir-fried in a savory sauce.',
    price: '$10.99',
    image:
      'https://images.pexels.com/photos/10695966/pexels-photo-10695966.jpeg',
  },
  {
    title: 'Cheeseburger',
    description:
      'A juicy beef patty topped with cheese, lettuce, tomato, and pickles.',
    price: '$9.99',
    image: 'https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg',
  },
  {
    title: 'Caesar Salad',
    description:
      'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.',
    price: '$8.99',
    image: 'https://images.pexels.com/photos/1406336/pexels-photo-1406336.jpeg',
  },
  {
    title: 'Margherita Pizza',
    description:
      'A classic pizza topped with fresh mozzarella, tomatoes, and basil.',
    price: '$13.99',
    image:
      'https://images.pexels.com/photos/16890470/pexels-photo-16890470.jpeg',
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default function MenuItem(restaurantName: any) {
  const dispatch = useDispatch();
  const selectItem = (item: any, checkboxValue: boolean) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue },
    });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)} 
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

type Food = {
  title: string;
  description: string;
  price: string;
  image: string;
};

type FoodInfoProps = {
  food: Food;
};

const FoodInfo: React.FC<FoodInfoProps> = props => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage: React.FC<FoodInfoProps> = props => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
