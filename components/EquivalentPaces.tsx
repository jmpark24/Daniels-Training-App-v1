import React from 'react';
import { Text, View } from 'react-native';

interface RaceTableProps {
  title: string;
  columns: string[];
  data: {
    type: string;
    paces: string[];
  }[];
}

const RaceTable = ({ title, columns, data }: RaceTableProps) => (
  <View className="mb-4">
    <View className="flex-row mb-2">
      <Text className="font-extrabold flex-1">{title}</Text>
      {columns.map((column, index) => (
        <Text key={index} className="font-bold flex-1 text-center p-1">
          {column}
        </Text>
      ))}
    </View>
    {data.map((row, index) => (
      <View key={index} className="flex-row mb-1 items-center">
        <Text className="flex-1 text-sm my-1">{row.type}</Text>
        {row.paces.map((pace, paceIndex) => (
          <Text key={paceIndex} className="flex-1 text-center">
            {pace}
          </Text>
        ))}
      </View>
    ))}
  </View>
);

const EquivalentPaces = () => {
  return (
    <View>
      <RaceTable
        title="Race"
        columns={['Time', 'Pace']}
        data={[
          { type: 'Marathon', paces: ['4:11:32', '5:58 / km'] },
          { type: 'Half Marathon', paces: ['2:01:58', '5:47 / km'] },
          { type: '10Mi', paces: ['1:31:25', '5:41 / km'] },
          { type: '15K', paces: ['1:24:28', '5:39 / km'] },
          { type: '10K', paces: ['55:00', '5:30 / km'] },
          { type: '8K', paces: ['43:57', '5:26 / km'] },
          { type: '6K', paces: ['32:05', '5:21 / km'] },
          { type: '5K', paces: ['26:30', '5:18 / km'] },
          { type: '2Mi', paces: ['16:40', '5:10 / km'] },
          { type: '3200m', paces: ['16:34', '5:10 / km'] },
          { type: '3K', paces: ['15:28', '5:09 / km'] },
          { type: '1Mi', paces: ['7:52', '4:54 / km'] },
          { type: '1600m', paces: ['7:49', '4:53 / km'] },
          { type: '1500m', paces: ['7:12', '4:48 / km'] },
        ]}
      />
    </View>
  );
};

export default EquivalentPaces;
