/**
 * @author sheng
 * @description 影视
 * @date 2021/11/14
 */

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabView from './tab-view'
import { Colors } from '../../common/theme'
import { setUnit } from '../../utils'

const Tab = createMaterialTopTabNavigator()

function MovieScene() {
  return (
    <Tab.Navigator
      initialRouteName='hot'
      screenOptions={{
        swipeEnabled: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#555',
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarScrollEnabled: true,
        tabBarStyle: {
          elevation: 0,
          borderBottomColor: Colors.border,
          borderBottomWidth: 1,
        },
        tabBarItemStyle: {
          width: setUnit(160)
        }
      }}
    >
      <Tab.Screen
        name='hot'
        component={TabView}
        options={{ tabBarLabel: '热播' }}
      />
      <Tab.Screen
        name='guoju'
        component={TabView}
        options={{ tabBarLabel: '国剧' }}
      />
      <Tab.Screen
        name='gangtai'
        component={TabView}
        options={{ tabBarLabel: '港台' }}
      />
      <Tab.Screen
        name='rihan'
        component={TabView}
        options={{ tabBarLabel: '日韩' }}
      />
      <Tab.Screen
        name='oumei'
        component={TabView}
        options={{ tabBarLabel: '欧美' }}
      />
      <Tab.Screen
        name='other'
        component={TabView}
        options={{ tabBarLabel: '其他' }}
      />
    </Tab.Navigator>
  )
}

export default MovieScene