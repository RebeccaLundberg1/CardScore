import React from 'react';
import { Pressable, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function GamesButton({ label }: { label: string }) {
  const theme = useTheme();

  return (
    <Pressable className='' style={{ backgroundColor: theme.bg }}>
      <Text className="text-black font-bold">{label}</Text>
    </Pressable>
  );
}
