import { View, Text, Pressable } from 'react-native'
import { useTheme } from '../context/ThemeContext'


export default function PlayerView({ players, name, points, height }: { players: number, name: string, points: number, height: number})  {
  
  const { theme } = useTheme() 
  const row_height = (players == 2 || players == 4) ? height / 2 : height / 3 

  return (
    <View className='flex-1 items-center justify-center' style={{ height: row_height }}>
      <Pressable 
        className='flex-1 rounded-md m-2 items-center justify-center self-stretch'
        style={{ backgroundColor: theme.button_one}}
        onPress={ () => {} }
      >
        <Text className='font-bold text-2xl' style={{ color: theme.text }}>{name}</Text>
        <Text className='font-bold text-4xl' style={{ color: theme.text }}>{points}</Text>
        <Text className='text-l text-red-800'>Informationstext</Text>
      </Pressable>
    </View>

  )
}
