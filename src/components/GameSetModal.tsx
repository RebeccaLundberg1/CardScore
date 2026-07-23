import { Modal, View, Text, Pressable, Switch } from 'react-native'
import { useState } from 'react'
import RulesModal from './RulesModal'
import Dropdown from './Dropdown'
import { useTheme } from '../context/ThemeContext'
import { useNavigation } from '@react-navigation/native'
//Settings for games
import chigago from '../data/chicago.json'
import plump from '../data/plump.json'

/*
* Pop-up modal for the user to be able to make some settings before start the new game
* @param name - The name of the game
* @param visible - Controls whether the modal is shown or not
* @param onClose - Function to close the modal 
*/
export default function GameSetModal({ name, visible, onClose }: { name: string, visible: boolean, onClose: () => void }) {
  const { theme } = useTheme()

  //Sort out the correct .json to render correct gameSetModal
  const games: Record<string, any> = {
    "Chicago": chigago,
    "Plump": plump
  }

  // Loops through game_setup and builds an object of default values for each setting
  const [ settings, setSettings ] = useState(
    Object.entries(games[name].game_setup).reduce((acc, [key, setting]: [string, any]) => {
      if (setting.default !== undefined) { 
        acc[key] = setting.default
      }
      return acc
    }, {} as Record<string, any>)
  )

  const [isVisible, setIsVisible] = useState(false)
  const navigation = useNavigation()
  
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType='fade'>
      <Pressable className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center' onPress={onClose}>
        <Pressable 
          className='w-4/5 max-w-[800] rounded-md p-4 items-center' 
          style={{ backgroundColor: theme.bg }} 
          onPress={() => {}}
        >
          <Text className='text-3xl font-bold p-2' style={{ color: theme.text }}>{name}</Text>
          {/* Loop and shows the settings for the game */}
         <View className='items-center mt-4 mb-4 w-full'>
            {Object.entries(games[name].game_setup).map(([key,setting]: [string, any]) => (
              <View key={key} className='flex-row justify-between items-center w-full p-2 m-2'>
                <Text className='text-xl' style={{ color: theme.text }}>{setting.label}</Text>
                {setting.values ? (
                  <Dropdown 
                    data={setting.values} 
                    value={settings[key]} 
                    onValueChange={(val) => setSettings({...settings, [key]: val})}
                  />
                ) : (
                  <Switch
                    value={settings[key]}
                    trackColor={{ false: theme.switch_off, true: theme.switch_on }}
                    ios_backgroundColor={theme.switch_off}
                    thumbColor={theme.toggle}
                    onValueChange={(val) => setSettings({...settings, [key]: val})}
                  />
                )}
              </View>
            ))}
          </View>
          <Pressable 
            className='items-center justify-center w-3/5 m-2 rounded-md px-4 py-2'
            style={{ backgroundColor: theme.button_one }}
            onPress={() => setIsVisible(true)}
          >
            <Text className='text-2xl font-semibold' style={{ color: theme.text }}>Spelregler</Text>
          </Pressable>
          <RulesModal name={name} visible={isVisible} onClose={() => setIsVisible(false)}/>
          <Pressable 
            className='items-center justify-center w-3/5 m-2 rounded-md px-4 py-2'
            style={{ backgroundColor: theme.button_two }}
            onPress={() => { navigation.navigate('Game', { settings, name }); onClose() }}
          >
            <Text className='text-2xl font-semibold' style={{ color: theme.text }}>Starta spel</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
