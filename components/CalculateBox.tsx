import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalculateItem from './CalculateItem';

const CalculateBox = () => {
  const [distance, setDistance] = useState('10K');
  const [time, setTime] = useState('55:00');
  const [pace, setPace] = useState('5:30 / km');

  return (
    <View className="m-4 mt-0 p-4 pt-7 bg-white rounded-lg shadow-lg">
      <CalculateItem
        title="Distance"
        value={distance}
        onChangeText={setDistance}
        icon={<Ionicons name="chevron-down" size={24} color="#9CA3AF" />}
      />
      <CalculateItem
        title="Time"
        value={time}
        onChangeText={setTime}
        icon={<Ionicons name="time-outline" size={24} color="#9CA3AF" />}
      />
      <CalculateItem
        title="Pace"
        value={pace}
        onChangeText={setPace}
        icon={<Ionicons name="walk-outline" size={24} color="#9CA3AF" />}
      />
      <View className="flex-row items-center justify-between mt-2 px-2">
        <TouchableOpacity className="items-center">
          <View className="border-[2px] rounded-full p-1 border-gray-300">
            <Ionicons name="options-outline" size={24} color="#000" />
          </View>
          <Text className="text-[8px] text-gray-400 mt-1">ADVANCED</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#60984D] px-8 py-3 rounded-full ml-1">
          <Text className="text-white font-semibold text-md">Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-1 items-center">
          <View className="border-[2px] rounded-full p-1 border-gray-300">
            <Ionicons name="refresh-outline" size={24} color="#000" />
          </View>
          <Text className="text-[8px] text-gray-400 mt-1">RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalculateBox;
