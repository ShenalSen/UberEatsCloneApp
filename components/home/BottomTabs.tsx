/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      {icon({ icon: 'home', text: 'Home' })}
      {icon({ icon: 'search', text: 'Browse' })}
      {icon({ icon: 'shopping-bag', text: 'Grocery' })}
      {icon({ icon: 'receipt', text: 'Orders' })}
      {icon({ icon: 'user', text: 'Account' })}
    </View>
  );
}

type IconProps = {
  icon: string;
  text: string;
};

const icon = (props: IconProps) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: 'center',
          }}
        />
        <Text style={{ fontSize: 12, alignSelf: 'center' }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
