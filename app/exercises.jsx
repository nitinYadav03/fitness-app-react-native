import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodyparts } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';
import { dummyExercises } from '../constants';

const Exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState(dummyExercises);

  useEffect(() => {
    // if(item) getExercises(item.name)
  }, [item]);

  const getExercises = async (bodyParts) => {
    let data = await fetchExercisesByBodyparts(bodyParts);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity onPress={()=>router.back()} style={{width: hp(5.5), height: hp(5.5), marginTop: hp(7)}} className="absolute mx-4 bg-rose-700 flex justify-center items-center rounded-full">
        <Ionicons name="arrow-back-outline" size={hp(3.5)} color="lightgray" />
      </TouchableOpacity>

      <View className="mx-4 mt-4 space-y-3">
        <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">{item.name} exercises</Text>
        <View className="mb-10">
            <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
