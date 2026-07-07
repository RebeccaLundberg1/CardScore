import { Pressable, Text, View, Modal } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../context/ThemeContext'

/*
* Selector component that render a modal of pressable choises for the user to choose number of players and so on. 
* @param data - The array list of values to choose from
* @param value - The value set right now
* @param onValueChange - The function to change the value
*/
export default function Dropdown({ data, value, onValueChange }: { data: any[] ,value: any , onValueChange: (val: any) => void }) {
  
  const { theme } = useTheme()

  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <>
      {/* The visible button showed in GameSetModal for the dropdown */}
      <Pressable 
        className='px-7 py-2 rounded-full justify-center items-center'
        style={{ backgroundColor: theme.button_one }}
        onPress={() => setIsVisible(true)}
      >
        <Text style={{ color: theme.text }}>{value}</Text>
      </Pressable>
      {/* A modal pop-up if the pressable above is clicked. The modal shows a number of choises
          for the setting */}
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
