import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const android = Platform.OS == 'android'
const ExerciseDetails = () => {
    const router = useRouter()
  const item = useLocalSearchParams();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          style={{ width: wp(100), height: wp(100) }}
          contentFit="cover"
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity onPress={()=>router.back()} style={{marginTop: android ? hp(3) : ""}} className="absolute right-0 mt-2 mx-2">
        <MaterialCommunityIcons name="close-octagon" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>
      

      <ScrollView className="mx-4 space-y-3 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}} >
        <Animated.Text entering={FadeInDown.duration(300).springify()} style={{fontSize: hp(3.5)}} className="font-semibold text-neutral-800 tracking-wide">
            {item.name}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} style={{fontSize: hp(2)}} className="text-neutral-700 tracking-wide">
            Equipment: <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()} style={{fontSize: hp(2)}} className="text-neutral-700 tracking-wide">
            Secondary Muscles: <Text className="font-bold text-neutral-800">{item.secondaryMuscles}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()} style={{fontSize: hp(2)}} className="text-neutral-700 tracking-wide">
            Target: <Text className="font-bold text-neutral-800">{item.target}</Text>
        </Animated.Text>

        <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()} style={{fontSize: hp(3)}} className="font-semibold text-neutral-800 tracking-wide">
            Instructions
        </Animated.Text>
        {
            item.instructions.split(',').map((instruction, index)=>{
                return <Animated.Text entering={FadeInDown.delay((index+6)*100).duration(300).springify()} key={index} style={{fontSize: hp(1.8)}} className="text-neutral-800">
                    <Text className="font-bold">{index+1}.</Text> {instruction}
                </Animated.Text>
            })
        }
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;
