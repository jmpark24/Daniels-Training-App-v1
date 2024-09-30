import CalculationResults from '@/components/CalculationResults';
import TrainingPaces from '@/components/TrainingPaces';
import { View, ScrollView } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';

const TrainingScreen: FC = () => {
  return (
    <View className="px-4 w-full h-full">
      <ScrollView>
        <View className="bg-white p-4 rounded-lg">
          <CalculationResults />
          <TrainingPaces />
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainingScreen;
