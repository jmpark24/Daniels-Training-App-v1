import { FC } from 'react';
import { View } from 'react-native';
import CalculateBox from '@/components/CalculateBox';
import Header from '@/components/Header';

const CalculatorScreen: FC = () => {
  return (
    <View className="w-full h-full">
      <Header title="Calculator" />
      <CalculateBox />
    </View>
  );
};
export default CalculatorScreen;
