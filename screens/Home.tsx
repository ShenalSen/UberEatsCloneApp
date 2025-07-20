/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurents } from '../components/RestaurantItems';

const X_RAPID_API_KEY = "08eeacb770mshe6bedced0d12369p16f6d5jsn070c52113943";
// App : default-application_10838207
// X-RapidAPI-Key : 08eeacb770mshe6bedced0d12369p16f6d5jsn070c52113943
// Request URL : rapidapi.com


export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurents);

  const getRestaurantFromRapid = () => {
    const rapidurl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554';
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${X_RAPID_API_KEY}`,
      },
    };

    fetch(rapidurl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.data))
      .catch((err) => console.error(err));
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurentData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
