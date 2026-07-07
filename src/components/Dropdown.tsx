import { Pressable, Text, View, Modal } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../context/ThemeContext'

export default function Dropdown({ data, value, onValueChange }: { data: any[] ,value: any , onValueChange: (val: any) => void }) {
  
  const { theme } = useTheme()

  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <>
      <Pressable 
        className='px-7 py-2 rounded-full justify-center items-center'
        style={{ backgroundColor: theme.button_one }}
        onPress={() => setIsVisible(true)}>
        <Text style={{ color: theme.text }}>{value}</Text>
      </Pressable>
      <Modal visible={isVisible} transparent animationType='fade'>
        <SafeAreaView  className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center'>
          <View className='rounded-md' style={{ backgroundColor: theme.bg }}>
            {data.map((item) => (
              <Pressable 
                className='rounded-full justify-center items-center m-2 px-7 py-2' 
                style={{ backgroundColor: theme.button_one }}
                key={item} 
                onPress={() => { onValueChange(item); setIsVisible(false) }}
              >
                <Text style={{ color: theme.text }}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}
