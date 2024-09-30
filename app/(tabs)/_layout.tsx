import React, { useState } from 'react';
import { View, StatusBar, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalculatorScreen from '.';
import TrainingScreen from './Training';
import EquivalentScreen from './Equivalent';
import MoreScreen from './More';
import Header from '../../components/Header'; // Header 파일 import
import TabBar from '../../components/TabBar'; // TabBar 파일 import
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

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

const App = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'calculator', title: 'Calculator', icon: 'calculator-outline', iconLib: Ionicons },
    { key: 'training', title: 'Training', icon: 'directions-run', iconLib: MaterialIcons },
    { key: 'equivalent', title: 'Equivalent', icon: 'bars', iconLib: AntDesign },
    { key: 'more', title: 'More', icon: 'more-horizontal', iconLib: Feather },
  ];

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#ab0808" />

      {/* TabView에서 기본 TabBar 비활성화 */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: useWindowDimensions().width }}
        renderTabBar={() => null}
        style={{ flex: 1 }}
      />

      {/* TabBar 컴포넌트 */}
      <View className="border-t border-gray-200">
        <TabBar routes={routes} index={index} setIndex={setIndex} />
      </View>
    </SafeAreaView>
  );
};

export default App;
