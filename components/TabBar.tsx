// TabBar.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons'; // 필요한 아이콘

interface TabBarProps {
  routes: {
    key: string;
    title: string;
    icon: string;
    iconLib: React.ComponentType<any>;
  }[];
  index: number;
  setIndex: (index: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({ routes, index, setIndex }) => {
  return (
    <View className="flex-row p-2 bg-gray-100 justify-between">
      {routes.map((route, i) => {
        const focused = index === i;
        const IconComponent = route.iconLib;

        return (
          <View className="items-center justify-center w-20 h-16" key={route.key}>
            <Pressable onPress={() => setIndex(i)}>
              <View className="items-center justify-center">
                <IconComponent name={route.icon} size={30} color={focused ? 'black' : '#6b7280'} />
                <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-[9px] mt-2`}>
                  {route.title}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
