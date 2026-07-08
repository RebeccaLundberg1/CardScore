import { View, Text, Modal, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../context/ThemeContext'
import { StatusBar } from 'expo-status-bar'

export default function GameScreen() {

  const { theme } = useTheme() 

  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: theme.bg }}>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-6xl font-semibold' style={{ color: theme.text }}>Game</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
