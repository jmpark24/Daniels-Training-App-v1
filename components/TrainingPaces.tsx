import { Text, View } from 'react-native';

interface PaceTableProps {
  title: string;
  columns: string[];
  data: {
    type: string;
    paces: string[];
  }[];
}

const PaceTable = ({ title, columns, data }: PaceTableProps) => (
  <View className="mb-4">
    <View className="flex-row mb-2">
      <Text className="font-extrabold flex-1">{title}</Text>
      {columns.map((column, index) => (
        <Text key={index} className="font-bold flex-1 text-center">
          {column}
        </Text>
      ))}
    </View>
    {data.map((row, index) => (
      <View key={index} className="flex-row mb-1 items-center">
        <Text className="font-extrabold flex-1 text-[#60984D] text-sm m-1">{row.type}</Text>
        {row.paces.map((pace, paceIndex) => (
          <Text key={paceIndex} className="flex-1 text-center">
            {pace}
          </Text>
        ))}
      </View>
    ))}
  </View>
);
const TrainingPaces = () => (
  <View>
    <PaceTable
      title="Type"
      columns={['1 Mi', '1 Km']}
      data={[
        { type: 'Easy', paces: ['10:29 ~ 11:30', '6:31 ~ 7:09'] },
        { type: 'Marathon', paces: ['9:36', '5:58'] },
        { type: 'Threshold', paces: ['8:52', '5:30'] },
        { type: 'Interval', paces: ['8:04', '5:01'] },
        { type: 'Repetition', paces: ['7:40', '4:46'] },
      ]}
    />
    <PaceTable
      title="Type"
      columns={['1200M', '800M', '600M']}
      data={[
        { type: 'Threshold', paces: ['6:36', '4:24', '3:18'] },
        { type: 'Interval', paces: ['6:01', '4:01', '3:00'] },
        { type: 'Repetition', paces: ['5:43', '3:49', '2:51'] },
      ]}
    />
    <PaceTable
      title="Type"
      columns={['400M', '300M', '200M']}
      data={[
        { type: 'Interval', paces: ['2:00', '1:30', '1:00'] },
        { type: 'Repetition', paces: ['1:54', '1:26', '0:57'] },
        { type: 'Fast Reps', paces: ['1:46', '1:20', '0:53'] },
      ]}
    />
  </View>
);

export default TrainingPaces;
