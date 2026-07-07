import { View, Text, ImageBackground, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import GamesButton from '../components/GamesButton'
import { useTheme } from '../context/ThemeContext'
import games from '../data/games.json'

/*
* Reder the first page you meet when you open the app.
*/ 
export default function HomeScreen() {
  const { theme, toggleTheme, isDark } = useTheme()
  const notebookImage = require('../../assets/images/notebook.png')

  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: theme.bg }}>
      <View className='flex-row justify-end'>
        {/* Switch to alter between color theme light and dark */}
        <Switch className='m-4'
          value={isDark}
          trackColor={{ false: theme.secondary, true: theme.secondary }}
          ios_backgroundColor={theme.secondary}
          thumbColor={theme.toggle}
          onValueChange={toggleTheme}/>
      </View>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-6xl font-semibold' style={{ color: theme.text }}>KortScore</Text>
      </View>
      <ImageBackground source={notebookImage} className='' style={{ flex: 2 }}>
        <View className='flex-1 items-center mt-20'>
          {games.filter(game => game.state == true).map(game => (
            <GamesButton key={game.id} label={game.name} />
          ))}
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
