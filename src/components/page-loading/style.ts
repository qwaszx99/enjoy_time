import { StyleSheet } from 'react-native'
import { Colors } from 'common/theme'
import { setUnit } from 'utils'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: Colors.gray,
    marginTop: setUnit(20)
  }
})

export { styles }