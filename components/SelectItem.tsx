import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
interface SelectItemProps {
  title: string;
  borderNone?: boolean;
}

const SelectItem = ({ title, borderNone }: SelectItemProps) => {
  return (
    <View
      className={`flex-row justify-between p-[22px] border-gray-300 ${borderNone ? 'border-none' : 'border-b'}`}
    >
      <Text className="font-bold">{title}</Text>
      <AntDesign name="right" size={24} color="#9ca3af" />
    </View>
  );
};

export default SelectItem;
