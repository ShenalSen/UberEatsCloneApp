/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

type ViewCartProps = {
  navigation: any;
  restaurentName: string;
};

export default function ViewCart({
  navigation,
  restaurentName,
}: ViewCartProps) {
  const items = useSelector(
    (state: any) => state.cartReducer.selectedItems.items,
  );

  const total = items
    .map((item: any) => Number(item.price.replace('$', '')))
    .reduce((prev: number, curr: number) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  console.log('Total:', totalUSD);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                margin: 20,
                padding: 15,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRadius: 30,
                width: 300,
                position: 'relative',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginRight: 30,
                  fontWeight: 'bold'
                }}
              >
                View Cart
              </Text>
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold'
              }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
