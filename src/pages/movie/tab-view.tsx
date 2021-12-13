import React, { FC, memo } from 'react'
import { Text, View } from 'react-native'
import { MovieTypeItem } from 'types/movie'
import { styles } from './style'

const TabView:FC<MovieTypeItem> = memo(({ title }) => {
  return(
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
})

export default TabView