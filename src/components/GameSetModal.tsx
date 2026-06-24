import { Modal, View, Text, Pressable, Switch } from 'react-native';
import chigago from '../data/chicago.json';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';


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


  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType='fade'>
      <Pressable className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center' onPress={onClose}>
        <Pressable className='bg-white w-4/5 h-3/5 rounded-md p-4 items-center' onPress={() => {}}>
          <Text>{name}</Text>
         <View className='flex-1 items-center mt-20'>
            {Object.entries(games[name].game_setup).map(([key,setting]) => (
              <View key={key}>
                <Text>{setting.label}</Text>
                {setting.values ? (
                  <Picker 
                    selectedValue={settings[key]} 
                    onValueChange={(val) => setSettings({...settings, [key]: val})} 
                  >
                    {setting.values.map((i) =>
                      <Picker.Item key={i} label={String(i)} value={i} />
                    )}
                  </Picker>
                ) : ( 
                  <Switch
                    value={settings[key]}
                    onValueChange={(val) => setSettings({...settings, [key]: val})}
                  />
                )}
              </View>
            ))}
          </View> 
        </Pressable>
      </Pressable>
    </Modal>
  )
}
