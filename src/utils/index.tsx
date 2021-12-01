import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export function setUnit(num: number) {
  return width / 750 * num
}