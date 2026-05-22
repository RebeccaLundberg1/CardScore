import React from 'react';
import { Pressable, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function GamesButton({ label }: { label: string }) {
  const theme = useTheme();

  return (
    <Pressable className='items-center justify-center border w-3/5 h-1/6 m-2 rounded-md px-4 py-2' 
      style={{ backgroundColor: theme.bg, borderColor: theme.primary }}>
      <Text className="text-3xl text-black font-semibold">{label}</Text>
    </Pressable>
  );
}
