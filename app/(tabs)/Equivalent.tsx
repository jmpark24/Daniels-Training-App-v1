import CalculationResults from '@/components/CalculationResults';
import EquivalentPaces from '@/components/EquivalentPaces';

import { View, ScrollView } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';
import Header from '@/components/Header';

const EquivalentScreen: FC = () => {
  return (
    <>
      <Header title="Equivalent" />
      <ScrollView>
        <View className="px-4 w-full h-full">
          <View className="bg-white p-4 rounded-lg">
            <CalculationResults />
            <EquivalentPaces />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EquivalentScreen;
