import React, { FC, memo } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

const TabView:FC = memo(() => {
  return(
    <View style={styles.container}>
      <Text>电影</Text>
    </View>
  )
})

export default TabView