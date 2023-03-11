import { CompositeScreenProps, CompositeNavigationProp } from '@react-navigation/native'
import { BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'

type TabParamList = {
  Home: undefined,
  Novel: undefined,
  Movie: undefined,
  Music: undefined,
  Mine: undefined
}

type StackParamList = {
  Main: undefined,
  Detail: { id: string, link: string }
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

type MovieScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Movie'>,
  NativeStackNavigationProp<StackParamList>
>

type ResponseProps = {
  code: number
  msg: string
  data: unknown
}

export type {
  TabScreenProps,
  DetailScreenProps,
  MineScreenProps,
  ResponseProps,
  MovieScreenNavigationProp
}