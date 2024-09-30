import React from 'react';
import { Ionicons, MaterialIcons, FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

interface TabBarIconProps {
  iconType: 'Ionicons' | 'MaterialIcons' | 'FontAwesome' | 'Feather' | 'AntDesign';
  name: string;
  color: string;
  size?: number; // size도 전달할 수 있게 기본값을 설정할 수 있습니다.
  style?: any;
}

const iconMap = {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
};

export function TabBarIcon({ iconType, name, color, size = 28, style, ...rest }: TabBarIconProps) {
  const IconComponent = iconMap[iconType] as React.ElementType;

  return (
    <IconComponent
      name={name}
      color={color} // color를 명시적으로 전달
      size={size} // size를 명시적으로 전달하고 기본값을 28로 설정
      style={[{ marginBottom: -3 }, style]}
      {...rest} // 기타 나머지 props
    />
  );
}
