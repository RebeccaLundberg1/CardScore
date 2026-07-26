import { View, Text, Pressable } from 'react-native'
import { useTheme } from '../context/ThemeContext'

/*
* Players card in gamescreen, holds name, points and warnings
* @param players - number of players in the game 
* @param name - name of player 
* @param points - total points
* @param height - number telling the view how big the space is to fill
*/
export default function PlayerView({ players, name, points, height }: { players: number, name: string, points: number, height: number})  {
  
  const { theme } = useTheme() 
  /* count the height of card to fit all players in the view */ 
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

