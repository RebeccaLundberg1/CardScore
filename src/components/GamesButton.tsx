import React from 'react';
import { Pressable, Text } from 'react-native';


export default function GamesButton({ id, label }) {
  
  return (
    <Pressable className="bg-gray-400">
      <Text className="text-black font-bold">{label}</Text>
    </Pressable>
  );
}
