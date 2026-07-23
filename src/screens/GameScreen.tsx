import { View, Text, Modal, Pressable, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../context/ThemeContext'
import { StatusBar } from 'expo-status-bar'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RulesModal from '../components/RulesModal'
import PlayerView from '../components/PlayerView'
import NameModal from '../components/NameModal'


export default function GameScreen() {

  const { theme } = useTheme() 
  const route = useRoute()
  const { settings, name } = route.params as any
  const [isVisible, setIsVisible] = useState(false)
  const [nameModalVisible, setNameModalVisible] = useState(true)
  const [gridHeight, setGridHeight] = useState(0)
  const navigation = useNavigation()
  const [ players, setPlayers ] = useState(
    Array.from({ length: settings.players }, (_, i) => ({
      id: i,
      name: `Spelare ${i + 1}`,
      points: 0
    }))
  )
  
  const col = settings.players > 3 ? 2 : 1

  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: theme.bg }}>
      <NameModal 
        players={settings.players} 
        visible={nameModalVisible} 
        onClose={(names) => 
          {setNameModalVisible(false)
          setPlayers(players.map((player, i) => ({ ...player, name: names[i] }))) 
        }} 
      />
      <View className='flex-1'>
        {/* Top of screen, holds "Spelregler", name of game and "Avsluta" */}
        <View className='flex-row justify-between items-center'>
          <Pressable 
            className='items-center justify-center w-1/3 m-2 rounded-md px-4 py-2'
            onPress={() => setIsVisible(true)}
            >
            <Text className='text-xl font-semibold' style={{ color: theme.text }}>Spelregler</Text>
          </Pressable>
          <RulesModal name={name} visible={isVisible} onClose={() => setIsVisible(false)}/>
          <Text className='text-3xl font-semibold text-center pt-6 mb-2' style={{ color: theme.text }}>{name}</Text>
          <Pressable 
            className='m-2 px-4 py-2 rounded-md justify-center items-center w-1/3' 
            onPress={ () => {navigation.navigate('Home')}} //Borde öppna en modal för att vara säker på att avsluta spel?
          >
            <Text className='font-semibold text-xl' style={{ color: theme.text }}>Avsluta</Text>
          </Pressable>
        </View>

        {/* Players grid */}
        <View className='flex-1' onLayout={(e) => setGridHeight(e.nativeEvent.layout.height)}>
          <FlatList
            scrollEnabled={false}
            data={players}
            numColumns={col}
            keyExtractor={(player) => player.id.toString()}
            renderItem={({ item }) => (
              <PlayerView players={settings.players} name={item.name} points={item.points} height={gridHeight} />
            )}
          />
        </View>
      </View>

      {/* Bottom of screen, holds information box, "Ångra" and "Nästa runda" */}
      <View className='h-1/5'>
        <View className='h-1/2 mx-2'>
          <View className='flex-1 border-2 py-2 m-2 rounded-md justify-center items-center' style={{ borderColor: theme.button_one}}>
            <Text className='font-semibold text-xl' style={{ color: theme.text }}>*Spelets läge*</Text>
          </View>
        </View>
        <View className='flex-row flex-1 justify-between items-center mx-2 mb-2'>
          <Pressable 
            className='flex-1 mx-2 px-4 py-2 rounded-md justify-center items-center self-stretch' 
            style={{ backgroundColor: theme.button_one }}
            onPress={ () => {} }
          >
            <Text className='font-bold text-xl' style={{ color: theme.text }}>Ångra</Text>
            <Text className='text-l' style={{ color: theme.text }}>*Namn poäng*</Text>
          </Pressable>
          <Pressable 
            className='flex-1 mx-2 px-4 py-2 rounded-md justify-center items-center self-stretch' 
            style={{ backgroundColor: theme.button_one }}
            onPress={ () => {} }
          >
            <Text className='font-semibold text-xl' style={{ color: theme.text }}>Nästa runda</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}


