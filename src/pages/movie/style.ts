import { Colors, FontSize } from 'common/theme'
import { StyleSheet } from 'react-native'
import { setUnit } from 'utils'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: setUnit(330),
    borderRadius: setUnit(16),
    backgroundColor: 'white',
    overflow: 'hidden',
    marginVertical: setUnit(15)
  },
  cover: {
    width:  setUnit(330),
    height: setUnit(440),
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  columnStyle: {
    paddingHorizontal: setUnit(30),
    justifyContent: 'space-between'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: setUnit(10)
  },
  contentStyle: {
    paddingVertical: setUnit(15)
  },
  content: {
    padding: setUnit(20)
  },
  name: {
    fontSize: FontSize.small,
    color: Colors.dark
  },
  star: {
    marginTop: setUnit(6),
    color: Colors.gray,
    fontSize: FontSize.small
  },
  bg: {
    padding: setUnit(6),
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  progress: {
    color: 'white',
    fontSize: FontSize.tiny
  },
  label: {
    color: '#aaa',
    fontSize: FontSize.tiny
  }
})

export { styles }