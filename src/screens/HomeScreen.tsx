import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GamesButton from '../components/GamesButton';
import { colors } from '../theme';
import games from '../data/games.json';

const theme = colors.light;

export default function HomeScreen() {

    return (
    <View className='flex-1 items-center justify-center' style={{ backgroundColor: theme.bg }}>
      <Text className="text-xl font-bold">CardScore</Text>
      {games.filter(game => game.state == true).map(game => (
        <GamesButton key={game.id} label={game.name} />
      ))}
      <StatusBar style="auto" />
    </View>
  )
}
