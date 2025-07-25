/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type ViewCartProps = {
  navigation: any;
  restaurentName: string;
};

export default function ViewCart({
  navigation,
  restaurentName,
}: ViewCartProps) {
  return (
    <View style={{ 
        flex: 1,  
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute', 
        bottom: 130,
        zIndex: 999
        }}>
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
            padding: 13,
            backgroundColor: 'black',
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
            }}
          >
            VIEW CART
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
