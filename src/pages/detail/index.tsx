import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { DetailScreenProps } from '../../interface'

const Page: FC<DetailScreenProps> = ({ route }) => {
  console.log(route.params?.id)
  return (
    <View style={{ flex: 1 }}>
      <Text>我是详情页</Text>
    </View>
  )
}

export default Page