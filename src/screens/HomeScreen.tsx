import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GamesButton from '../components/GamesButton';
import { useTheme } from '../context/ThemeContext';
import games from '../data/games.json';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View className='flex-1' style={{ backgroundColor: theme.bg }}>
      <View className='flex-1 items-center justify-center'>
        <Text className="text-xl font-bold">CardScore</Text>
      </View>
      <View className='flex-1 items-center justify-start'>
        {games.filter(game => game.state == true).map(game => (
          <GamesButton key={game.id} label={game.name} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
