import React, { FC, memo } from 'react'
import { Alert, Text, View } from 'react-native'
import { MovieTypeItem } from 'types/movie'
import { styles } from './style'

const TabView:FC<MovieTypeItem> = memo(({ title, link }) => {
  return(
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
})

export default TabView