import React, { FC } from 'react'
import { Text } from 'react-native'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/core'
import { TabScreenProps } from '../../types'
import HomeScene from '../../pages/home'
import NovelScene from '../../pages/novel'
import MovieScene from '../../pages/movie'
import MusicScene from '../../pages/music'
import MineScene from '../../pages/mine'
import Icon from '../../assets/icomoon'

const Tab = createBottomTabNavigator()

const TabConfig = {
  'Home': { icon: 'shouye', label: '首页' },
  'Novel': { icon: 'xiaoshuo', label: '小说' },
  'Movie': { icon: 'shipin', label: '影视' },
  'Music': { icon: 'yinle', label: '音乐' },
  'Mine': { icon: 'profile', label: '我的' }
}

type TabRouteName = 'Home' | 'Novel' | 'Movie' | 'Music' | 'Mine'

const screenOptions: BottomTabNavigationOptions | ((props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions) | undefined = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    return <Icon name={TabConfig[route.name as TabRouteName].icon} color={color} size={22} />
  },
  tabBarLabel: ({ color }) => {
    return <Text style={{ color }}>{TabConfig[route.name as TabRouteName].label}</Text>
  },
  headerShown: false,
  tabBarLabelPosition: 'below-icon',
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
})

const MainStack: FC<TabScreenProps> = () => {
  return (
    <Tab.Navigator backBehavior='none' screenOptions={screenOptions}>
      <Tab.Screen name='Home' component={HomeScene} />
      <Tab.Screen name='Novel' component={NovelScene} />
      <Tab.Screen name='Movie' component={MovieScene} />
      <Tab.Screen name='Music' component={MusicScene} />
      <Tab.Screen name='Mine' component={MineScene} />
    </Tab.Navigator>
  )
}

export default MainStack