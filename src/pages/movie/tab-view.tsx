import React, { FC, memo } from 'react'
import { Text, View } from 'react-native'
import { MovieMenuItem } from 'types/movie'
import { styles } from './style'

const TabView:FC<MovieMenuItem> = memo(({ title }) => {
  return(
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
})

export default TabView