import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const ResultsItem = () => {
  return (
    <ScrollView className="w-full">
      {/* Header */}
      <View className="flex-row bg-gray-200 p-2">
        <Text className="flex-1 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          Type
        </Text>
        <Text className="flex-1 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          1 Mi
        </Text>
        <Text className="flex-1 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          1 Km
        </Text>
      </View>

      {/* Rows */}
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Easy
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">
          10:29 ~ 11:30
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">
          6:31 ~ 7:09
        </Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Marathon
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">9:36</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">5:58</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Threshold
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">8:52</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">5:30</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Interval
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">8:04</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">5:01</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Repetition
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">7:40</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">4:46</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          Fast Reps
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:46</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:20</Text>
      </View>
      {/* 밑에 다양한 거리에 대한 추가 행들 */}
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          1200M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">6:36</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">4:24</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          800M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">6:01</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">4:01</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          600M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">5:43</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">3:49</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          400M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">2:00</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:30</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          300M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:54</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:26</Text>
      </View>
      <View className="flex-row bg-white p-2 border-b border-gray-300">
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          200M
        </Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">1:00</Text>
        <Text className="flex-1 px-4 py-2 whitespace-nowrap text-sm text-gray-500">0:57</Text>
      </View>
    </ScrollView>
  );
};

export default ResultsItem;
