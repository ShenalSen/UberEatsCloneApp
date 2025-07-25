/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurents } from '../components/home/RestaurantItems';

const X_RAPID_API_KEY = "#08ee#acb770mshe6bedced0#d123696d5jsn070c52113943#hashcoded";
// App : default-application_10838207
// X-RapidAPI-Key : 08eeacb770mshe6bedced0d12369p16f6d5jsn070c52113943
// Request URL : rapidapi.com


export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurents);

  const getRestaurantFromRapid = () => {
    const rapidurl = '##https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=hashcoded';
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

  /* 
  React.useEffect(() => {
    getRestaurantFromRapid();
  }, []);
  */

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
