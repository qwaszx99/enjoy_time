/**
 * @author sheng
 * @description 页面占位符
 * @date 2021/12/13
 */

import React, { FC } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Colors } from 'common/theme'
import { styles } from './style'

interface PageLoadingProps {
  title?: string
}

const PageLoading: FC<PageLoadingProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size='large'
        color={Colors.primary}
      />
      {
        title
          ? <Text style={styles.title}>{title}</Text>
          : null
      }
    </View>)

}

export default PageLoading