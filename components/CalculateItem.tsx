import React, { FC } from 'react';
import { TextInput, View, Text } from 'react-native';

interface CalculateItemProps {
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
}

const CalculateItem: FC<CalculateItemProps> = ({ title, value, onChangeText, icon }) => {
  return (
    <View className="mb-4 mt-[3px]">
      <View className="border-t border-gray-200 relative">
        <Text className="absolute -top-2 left-2 bg-white px-1 text-[11px] font-medium text-gray-400">
          {title}
        </Text>
      </View>
      <View className="flex-row items-center py-2 border-x border-gray-200 border-b">
        <TextInput
          className="flex-1 text-md my-3 text-gray-800 font-normal px-4"
          onChangeText={onChangeText}
          value={value}
          keyboardType="numeric"
        />
        <View className="pr-4">{icon}</View>
      </View>
    </View>
  );
};

export default CalculateItem;
