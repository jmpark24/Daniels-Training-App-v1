import SelectBox from '@/components/SelectBox';
import { View } from 'react-native';
import { FC } from 'react';
import { AnimatedTabContent } from '@/components/AnimatedTabContent';
import Header from '@/components/Header';

const MoreScreen: FC = () => {
  return (
    <>
      <Header title="More" />
      <View className="w-full h-full">
        <SelectBox />
      </View>
    </>
  );
};

export default MoreScreen;
