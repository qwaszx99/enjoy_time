import React, { FC } from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/core'
import { TabScreenProps } from '../../types'
import HomeScene from '../../pages/home'
import NovelScene from '../../pages/novel'
import MovieScene from '../../pages/movie'
import MusicScene from '../../pages/music'
import MineScene from '../../pages/mine'


const Tab = createBottomTabNavigator()

const screenOptions: BottomTabNavigationOptions | ((props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions) | undefined = ({ route }) => ({
  // tabBarIcon: ({ focused, color, size }) => {
    
  // },
  headerShown: false,
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