import React, { FC } from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/core'
import { TabScreenProps } from 'types'
import HomeScene from '@pages/home'
import NovelScene from '@pages/novel'
import MovieScene from '@pages/movie'
import MusicScene from '@pages/music'
import MineScene from '@pages/mine'
import Icon from '../../assets/icomoon'

const Tab = createBottomTabNavigator()

const screenOptions: BottomTabNavigationOptions | ((props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions) | undefined = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName = ''
    switch (route.name) {
      case 'Home':
        iconName = 'shouye'
        break;
      case 'Novel':
        iconName = 'xiaoshuo'
        break
      case 'Movie':
        iconName = 'shipin'
        break
      case 'Music':
        iconName = 'yinle'
        break
      case 'Mine':
        iconName = 'profile'
        break
      default:
        break
    }
    return <Icon name={iconName} color={color} size={size} />
  },
  tabBarIconStyle: { fontSize: 24 },
  headerShown: false,
  tabBarLabelPosition: 'below-icon',
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray'
})

const MainStack: FC<TabScreenProps> = () => {
  return (
    <Tab.Navigator backBehavior='none' screenOptions={screenOptions}>
      <Tab.Screen name='Home' component={HomeScene} options={{ tabBarLabel: '首页' }} />
      <Tab.Screen name='Novel' component={NovelScene} options={{ tabBarLabel: '小说' }} />
      <Tab.Screen name='Movie' component={MovieScene} options={{ tabBarLabel: '影视' }} />
      <Tab.Screen name='Music' component={MusicScene} options={{ tabBarLabel: '音乐' }} />
      <Tab.Screen name='Mine' component={MineScene} options={{ tabBarLabel: '我的' }} />
    </Tab.Navigator>
  )
}

export default MainStack