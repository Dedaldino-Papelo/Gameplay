import { View, Text } from 'react-native'
import React from 'react'

type props = {
    title: string,
    subtitle: string
}

import { styles } from './styles'

export default function ListHeader({ title, subtitle }: props) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{title}</Text>
      <Text style = {styles.subtitle}>{subtitle}</Text>
    </View>
  )
}