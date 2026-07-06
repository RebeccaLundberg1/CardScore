import { Modal, View, Text, Pressable, Switch } from 'react-native';
import chigago from '../data/chicago.json';
import { useState } from 'react';
import RulesModal from './RulesModal';

export default function GameSetModal({ name, visible, onClose }: { name: string, visible: boolean, onClose: () => void }) {
  
const games = {
    "Chicago": chigago
  }

const [ settings, setSettings ] = useState(
  Object.entries(games[name].game_setup).reduce((acc, [key, setting]) => {
    if (setting.default !== undefined) { 
      acc[key] = setting.default
    }
    return acc
  }, {})
)

const [isVisible, setIsVisible] = useState(false)


  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType='fade'>
      <Pressable className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center' onPress={onClose}>
        <Pressable className='bg-white w-4/5 max-w-[800] rounded-md p-4 items-center' onPress={() => {}}>
          <Text className='text-3xl font-bold p-2'>{name}</Text>
         <View className='items-center mt-4 mb-4 w-full'>
            {Object.entries(games[name].game_setup).map(([key,setting]) => (
              <View key={key} className='flex-row justify-between items-center w-full p-2 m-2'>
                <Text className='text-xl'>{setting.label}</Text>
                {setting.values ? (
                  <Text>Dropdown</Text>
                ) : ( 
                  <Switch
                    value={settings[key]}
                    onValueChange={(val) => setSettings({...settings, [key]: val})}
                  />
                )}
              </View>
            ))}
          </View>
          <Pressable className='items-center justify-center border w-3/5 m-2 rounded-md px-4 py-2 bg-gray-200'
            onPress={() => setIsVisible(true)}>
            <Text className='text-2xl text-black font-semibold'>Spelregler</Text>
          </Pressable>
          <RulesModal name={name} visible={isVisible} onClose={() => setIsVisible(false)}/>
          <Pressable className='items-center justify-center border w-3/5 m-2 rounded-md px-4 py-2 bg-green-500'>
            <Text className='text-2xl text-black font-semibold'>Starta spel</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
