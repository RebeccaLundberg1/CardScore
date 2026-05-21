import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GamesButton from "../components/GamesButton.tsx";

export default function HomeScreen() {

  const games = require('../data/games.json')

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold">CardScore</Text>
      {games.filter(game => game.state == true).map(game => (
        <GamesButton key={game.id} id={game.id} label={game.name} />
      ))}
      <StatusBar style="auto" />
    </View>
  )
}
