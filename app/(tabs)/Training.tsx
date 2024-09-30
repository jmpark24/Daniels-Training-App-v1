import CalculationResults from '@/components/CalculationResults';
import TrainingPaces from '@/components/TrainingPaces';
import { View, ScrollView } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';
import Header from '@/components/Header';

const TrainingScreen: FC = () => {
  return (
    <>
      <Header title="Training" />
      <ScrollView>
        <View className="px-4 w-full h-full">
          <View className="bg-white p-4 rounded-lg">
            <CalculationResults />
            <TrainingPaces />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TrainingScreen;
