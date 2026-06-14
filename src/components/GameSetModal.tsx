import { Modal, View, Text } from 'react-native'

export default function GameSetModal({ visible, onClose }: { visible: boolean, onClose: () => void }) {
  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <Text>Hej</Text>
      </View>
    </Modal>
  )
}
