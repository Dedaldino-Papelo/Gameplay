import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello World, NLW Together</Text>

      <TextInput style={styles.input} />
    </View>
  )
}