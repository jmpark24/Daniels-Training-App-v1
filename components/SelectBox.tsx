import React from 'react';
import { View } from 'react-native';
import SelectItem from './SelectItem';

const SelectBox = () => {
  return (
    <View className="mx-4 bg-white rounded-lg">
      <SelectItem title="About" />
      <SelectItem title="Training Definitions" />
      <SelectItem title="Manage Workouts On V.O2" />
      <SelectItem title="Upgrade To Premium" />
      <SelectItem title="Settings" borderNone={true} />
    </View>
  );
};

export default SelectBox;
