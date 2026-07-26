import { Modal, Text, View, TextInput, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

/*
* Component to be able to enter name of players. Pops up when entering the gamescreen. 
* @param players - the number of players in the game
* @param visible - boolean if the model is shown or not 
* @param onClose - function that handles whats happening when modal closes. Array with names is returned.
*/
export default function NameModal({ players, visible, onClose }: { players: number, visible: boolean, onClose: (names: string[]) => void }) {

  const { theme } = useTheme()
  const [names, setNames] = useState(
    Array.from({ length: players }, (_, i) => `Spelare ${i + 1}`
  ))

  return (
    <Modal visible={visible} onRequestClose={() => onClose(names)} transparent animationType='fade'>
      <SafeAreaView className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center'>
        <View 
          className='max-h-[800px] w-4/5 max-w-[800px] rounded-md'
          style={{ backgroundColor: theme.bg }}
        >
          <View className='items-center'>
            <Text className='text-3xl font-bold pb-4 mt-4' style={{ color: theme.text }}>NAMN PÅ SPELARE</Text>
            {/* Creates an array in size of number of players and loops through to render correct
                number of textInput-fields. onChangeText makes a copy of names, update correct index and 
                then updates the names on top */}
            {Array.from({ length: players }, (_, i) => (
              <TextInput
                key={i}
                className='h-[40px] w-3/4 rounded-md px-2 text-center text-xl m-2'
                style={{ paddingVertical: 0, backgroundColor: theme.button_one}}
                placeholder={`Spelare ${i + 1}`}
                placeholderTextColor={theme.text} 
                onChangeText={(text) => {
                  const updated = [...names]
                  updated[i] = text
                  setNames(updated)
                }}
              />
            ))}
            <Pressable 
              className='items-center justify-center w-3/5 m-4 rounded-md px-4 py-2'
              style={{ backgroundColor: theme.button_two }}
              onPress={() => { onClose(names) }}
            >
              <Text className='text-2xl font-semibold text-center' style={{ color: theme.text }}>Låt bästa spelaren vinna!</Text>
            </Pressable>

          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
