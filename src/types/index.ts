import { CompositeScreenProps } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type TabParamList = {
  Home: undefined,
  Novel: undefined,
  Movie: undefined,
  Music: undefined,
  Mine: undefined
}

type StackParamList = {
  Main: undefined,
  Detail: { id: string }
}

type TabScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList>,
  NativeStackScreenProps<StackParamList>
>

type MineScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Mine'>,
  NativeStackScreenProps<StackParamList>
>

type DetailScreenProps = NativeStackScreenProps<StackParamList, 'Detail'>

type ResponseProps = {
  code: number
  msg: string
  data: unknown
}

export type {
  TabScreenProps,
  DetailScreenProps,
  MineScreenProps,
  ResponseProps
}