import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import GameSetModal from './GameSetModal';

export default function GamesButton({ label }: { label: string }) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Pressable className='items-center justify-center border w-3/5 h-1/6 m-2 rounded-md px-4 py-2'
        style={{ backgroundColor: theme.bg, borderColor: theme.primary }}
        onPress={() => setIsVisible(true)}>
        <Text className='text-3xl text-black font-semibold' style={{ color: theme.text }}>{label}</Text>
      </Pressable>
      <GameSetModal name={label} visible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
}
