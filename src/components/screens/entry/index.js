// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { yo } from 'app/util'

import styles from './styles'
import type { propTypes } from './constants'

const Entry = (props: propTypes) => {
  const { yoyo } = props

  const txt = yo()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{txt}</Text>
      <Text style={styles.text}>{yoyo}</Text>
    </View>
  )
}

export default Entry
