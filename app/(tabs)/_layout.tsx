import React, { ComponentType, useState } from 'react';
import { View, Text, useWindowDimensions, Pressable, StatusBar, Platform } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // 안전한 영역을 위한 컴포넌트
import CalculatorScreen from '.';
import TrainingScreen from './Training';
import EquivalentScreen from './Equivalent';
import MoreScreen from './More';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import VDOTIcon from '@/components/VDOTIcon';

// 각 화면 정의
const Calculator = () => <CalculatorScreen />;
const Training = () => <TrainingScreen />;
const Equivalent = () => <EquivalentScreen />;
const More = () => <MoreScreen />;

const renderScene = SceneMap({
  calculator: Calculator,
  training: Training,
  equivalent: Equivalent,
  more: More,
});

interface RouteType {
  key: string;
  title: string;
  icon: string;
  iconLib: ComponentType<IconProps<any>>; // 아이콘 라이브러리의 제네릭 타입 사용
}

const App = () => {
  const layout = useWindowDimensions(); // 화면 크기 감지
  const [index, setIndex] = useState(0); // 현재 탭의 인덱스 상태
  const [routes] = useState<RouteType[]>([
    { key: 'calculator', title: 'Calculator', icon: 'calculator-outline', iconLib: Ionicons },
    { key: 'training', title: 'Training', icon: 'directions-run', iconLib: MaterialIcons },
    { key: 'equivalent', title: 'Equivalent', icon: 'bars', iconLib: AntDesign },
    { key: 'more', title: 'More', icon: 'more-horizontal', iconLib: Feather },
  ]);

  const renderCustomHeader = () => {
    return (
      <View className="px-5 py-3 bg-gray-100 justify-between">
        {routes.map((route, i) => {
          const focused = index === i;
          if (focused) {
            return (
              <View className="items-center justify-between flex-row " key={route.key}>
                <Text className="text-3xl font-extrabold">{route.title}</Text>
                <VDOTIcon />
              </View>
            );
          }
        })}
      </View>
    );
  };

  const renderCustomTabBar = () => {
    return (
      <View className="flex-row p-2 bg-gray-100 justify-between">
        {routes.map((route, i) => {
          const focused = index === i;
          const IconComponent = route.iconLib;

          return (
            <View className="items-center justify-center w-20 h-16 " key={route.key}>
              <Pressable onPress={() => setIndex(i)}>
                <View className="items-center justify-center">
                  <IconComponent
                    name={route.icon}
                    size={30}
                    color={focused ? 'black' : '#6b7280'}
                  />
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

  return (
    <SafeAreaView className={`flex-1 ${Platform.OS === 'ios' ? 'bg-[#d1d5db]' : ''}`}>
      <StatusBar
        barStyle="light-content" // 텍스트 색상 (light-content: 흰색, dark-content: 검은색)
        backgroundColor="#d1d5db" // 상태바 배경색 설정 (Android 전용)
      />
      {/* 상단 헤더 추가 */}
      <View>{renderCustomHeader()}</View>

      {/* TabView에서 기본 TabBar 비활성화 */}
      <TabView
        navigationState={{ index, routes }} // 탭의 상태
        renderScene={renderScene} // 각 탭의 화면 렌더링
        onIndexChange={setIndex} // 탭 변경 시 호출
        initialLayout={{ width: layout.width }} // 초기 레이아웃 설정
        renderTabBar={() => null} // 기본 탭 바를 숨김
        style={{ flex: 1 }} // 화면을 채우도록 설정
      />

      {/* 커스텀 탭 바를 하단에 배치 */}
      <View className="border-t border-gray-200">{renderCustomTabBar()}</View>
    </SafeAreaView>
  );
};

export default App;
