/**
 * @author sheng
 * @description 影视
 * @date 2021/11/14
 */

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabView from './tab-view'
import { Colors } from 'common/theme'
import { setUnit } from 'utils'
import { APP } from 'config'

const Tab = createMaterialTopTabNavigator()

const MovieScene = () => {
  return (
    <Tab.Navigator
      initialRouteName='hot'
      screenOptions={{
        swipeEnabled: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#555',
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },
        tabBarLabelStyle: { fontSize: setUnit(32) },
        tabBarScrollEnabled: true,
        tabBarStyle: {
          elevation: 0,
          borderBottomColor: Colors.border,
          borderBottomWidth: 1,
        },
        tabBarItemStyle: {
          width: setUnit(220)
        },
        lazy: true
      }}
    >
      {
        APP.movieCategories.map(v => (
          <Tab.Screen
            key={v.title}
            name={v.title}
            children={() => <TabView {...v} />}
            options={{ tabBarLabel: v.title }}
          />
        ))
      }
    </Tab.Navigator>
  )
}

export default MovieScene


