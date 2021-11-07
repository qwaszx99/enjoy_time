import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined;
  Setting: { userId: string }
  Detail: { id: string, name: string } | undefined
}

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

export type { DetailScreenProps }