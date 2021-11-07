import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { View, Text } from 'react-native'

const Page: FC<NativeStackHeaderProps> = ({ route }) => {
  console.log(route.params)
  return (
    <View style={{ flex: 1 }}>
      <Text>我是详情页</Text>
    </View>
  )
}

export default Page