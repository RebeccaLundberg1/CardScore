import { Modal, View, Text, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Markdown from 'react-native-markdown-display'
import { useTheme } from '../context/ThemeContext'
//Rules for games
import { chicagoRules } from '../data/chicagoRules'
import { plumpRules } from '../data/plumpRules'

/*
* Modal that shows the rules for a specific game.
* @param name - the name of the game, used to look up the correct rules.
* @param visible - whether the modal is shown.
* @param onClose - used to close the modal. 
*/
export default function RulesModal({ name, visible, onClose }: { name: string, visible: boolean, onClose: () => void }) {

  const { theme } = useTheme()

  //Sort out the correct file of rules
  const games: Record<string, string> = {
    "Chicago": chicagoRules,
    "Plump": plumpRules
  }

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType='fade'>
      <SafeAreaView  className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center'>
        <View 
          className='h-4/5 max-h-[800px] w-4/5 max-w-[800px] rounded-md'
          style={{ backgroundColor: theme.bg }}
        >
          <View className='items-end'>
            <Pressable 
              className='w-[25px] h-[25px] m-2 rounded-md justify-center items-center' 
              style={{ backgroundColor: theme.button_one }}
              onPress={onClose}
            >
              <Text className='font-bold' style={{ color: theme.text }}>X</Text>
            </Pressable>
          </View>
          <View className='items-center'>
            <Text className='text-3xl font-bold pb-4' style={{ color: theme.text }}>REGLER</Text>
          </View>
          <ScrollView 
            className='bg-white max-w-[800px] rounded-md p-4'
            style={{ backgroundColor: theme.bg }}
            onStartShouldSetResponder={() => true}
          >
            <Markdown style={{ body: { color: theme.text } }}>{games[name]}</Markdown>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
