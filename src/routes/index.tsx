import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './modules/main'
import { useFlipper } from '@react-navigation/devtools'

import DetailPage from '../pages/detail'

const Stack = createNativeStackNavigator()

const config = {
  screens: {
    Main: {
      screens: {
        Home: 'main/home',
        Novel: 'main/novel',
        Movie: 'main/movie',
        Music: 'main/music',
        Mine: 'main/mine'
      }
    },
    Detail: 'detail/:id/:name',
    NotFound: '*'
  },
}

const linking = {
  prefixes: [],
  config
}

const Router = () => {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <NavigationContainer linking={linking} ref={navigationRef} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainStack} options={{ headerShown: false, animation: 'slide_from_left', gestureEnabled: true }} />
        <Stack.Screen name='Detail' component={DetailPage} options={{ animation: 'slide_from_left', gestureEnabled: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Router
