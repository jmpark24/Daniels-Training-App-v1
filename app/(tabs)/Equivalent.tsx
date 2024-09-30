import CalculationResults from '@/components/CalculationResults';
import EquivalentPaces from '@/components/EquivalentPaces';

import { View, ScrollView } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';

const EquivalentScreen: FC = () => {
  return (
    <View className="px-4 w-full h-full">
      <ScrollView>
        <View className="bg-white p-4 rounded-lg">
          <CalculationResults />
          <EquivalentPaces />
        </View>
      </ScrollView>
    </View>
  );
};

export default EquivalentScreen;
