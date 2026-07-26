import "./global.css";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from './src/context/ThemeContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./src/screens/HomeScreen"
import GameScreen from "./src/screens/GameScreen"

export type RootStackParamList = {
  Home: undefined
  Game: { settings: Record<string, any>, name: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
