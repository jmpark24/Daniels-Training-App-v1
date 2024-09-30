import { Text, TouchableOpacity, View } from 'react-native';

const VDOTIcon = () => {
  return (
    <View className="">
      <TouchableOpacity>
        <View className=" w-[70px] h-[70px] flex items-center justify-center p-2 border-[3px] bg-white border-gray-300 rounded-full ">
          <Text className="text-[6px]">VDOT</Text>
          <Text className="font-[800] text-lg my-[-3px]">35.8</Text>
          <Text className="text-[6px]">Tap to Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VDOTIcon;
