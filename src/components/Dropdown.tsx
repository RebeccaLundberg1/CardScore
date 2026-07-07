import { Pressable, Text, View, Modal } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Dropdown({ data, value, onValueChange }: { data: any[] ,value: any , onValueChange: (val: any) => void }) {

  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <>
      <Pressable className='px-7 py-2 bg-gray-300 rounded-full justify-center items-center' onPress={() => setIsVisible(true)}>
        <Text>{value}</Text>
      </Pressable>
      <Modal visible={isVisible} transparent animationType='fade'>
        <SafeAreaView  className='flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center'>
          <View className='bg-white rounded-md'>
            {data.map((item) => (
              <Pressable className='border-gray-300 border-2 rounded-full justify-center items-center m-2 px-7 py-2' key={item} onPress={() => { onValueChange(item); setIsVisible(false) }}>
                <Text>{item}</Text>
              </Pressable>
            ))}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}
