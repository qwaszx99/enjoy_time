/**
 * @author sheng
 * @description 影视
 * @date 2021/11/14
 */

import React from 'react'
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

function MovieScene() {
  return (
    <Tab.Navigator
      initialRouteName='hot'
      screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#555',
        tabBarIndicatorStyle: { backgroundColor: 'tomato' },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100
        }
      }}
    >
      <Tab.Screen
        name='hot'
        component={() => <Text>热播</Text>}
        options={{ tabBarLabel: '热播' }}
      />
      <Tab.Screen
        name='guoju'
        component={() => <Text>国剧</Text>}
        options={{ tabBarLabel: '国剧' }}
      />
      <Tab.Screen
        name='gangtai'
        component={() => <Text>港台</Text>}
        options={{ tabBarLabel: '港台' }}
      />
      <Tab.Screen
        name='rihan'
        component={() => <Text>日韩</Text>}
        options={{ tabBarLabel: '日韩' }}
      />
      <Tab.Screen
        name='oumei'
        component={() => <Text>欧美</Text>}
        options={{ tabBarLabel: '欧美' }}
      />
      <Tab.Screen
        name='other'
        component={() => <Text>其他</Text>}
        options={{ tabBarLabel: '其他' }}
      />
    </Tab.Navigator>
  )
}

export default MovieScene