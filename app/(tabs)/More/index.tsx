import SelectBox from '@/components/SelectBox';
import { View } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';

const MoreScreen: FC = () => {
  return (
    <View className="w-full h-full">
      <SelectBox />
    </View>
  );
};

export default MoreScreen;
