// Header.tsx
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import VDOTIcon from '@/components/VDOTIcon'; // 기존 아이콘 컴포넌트 경로

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View className="px-5 py-3 bg-gray-100 justify-between">
      <View className="items-center justify-between flex-row ">
        <Text className="text-3xl font-extrabold">{title}</Text>
        <VDOTIcon />
      </View>
    </View>
  );
};

export default Header;
