import { Modal, View, Text, Pressable, ScrollView } from 'react-native'
import { chicagoRules } from '../data/chicagoRules'
import { SafeAreaView } from 'react-native-safe-area-context'
import Markdown from 'react-native-markdown-display'

/*
* Modal that shows the rules for a specific game.
* @param name - the name of the game, used to look up the correct rules.
* @param visible - whether the modal is shown.
* @param onClose - used to close the modal. 
*/
export default function RulesModal({ name, visible, onClose }: { name: string, visible: boolean, onClose: () => void }) {

  const games: Record<string, string> = {
    "Chicago": chicagoRules
  }

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType='fade'>
      <SafeAreaView  className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center'>
        <View className='bg-white h-4/5 max-h-[800px] w-4/5 max-w-[800px] rounded-md'>
          <View className='items-end'>
            <Pressable className='bg-gray-300 w-[25px] h-[25px] m-2 rounded-md justify-center items-center' onPress={onClose}>
              <Text className='font-bold'>X</Text>
            </Pressable>
          </View>
          <View className='items-center'>
            <Text className='text-3xl font-bold pb-4'>REGLER</Text>
          </View>
          <ScrollView className='bg-white max-w-[800px] rounded-md p-4 ' onStartShouldSetResponder={() => true}>
            <Markdown>{games[name]}</Markdown>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
