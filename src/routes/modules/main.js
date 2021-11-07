import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen({ navigation }) {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => navigation.navigate('Detail', { id: 1, name: '3333' })}>Settings!</Text>
      <Image style={{ width: 300, height: 300 }} source={require('../../assets/6-11.png')} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default MainStack = () => {
  return (
    <Tab.Navigator backBehavior='none' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}