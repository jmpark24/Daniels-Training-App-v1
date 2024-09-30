import React, { FC } from 'react';
import { View } from 'react-native';
import CalculateBox from '@/components/CalculateBox';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';

const CalculatorScreen: FC = () => {
  return (
    <View className="w-full h-full">
      <CalculateBox />
    </View>
  );
};
export default CalculatorScreen;
