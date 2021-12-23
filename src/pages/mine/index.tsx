/**
 * @author sheng
 * @description 我的
 * @date 2021/11/14
 */

import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { MineScreenProps } from '../../types'
import { styles } from './style'

const MineScene:FC<MineScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>我的</Text>
    </View>
  )
}

export default MineScene