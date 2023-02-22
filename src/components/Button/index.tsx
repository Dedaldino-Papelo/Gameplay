import { View, Text,TouchableOpacity,TouchableOpacityProps } from 'react-native'
import React from 'react'

import { styles } from './styles'

type props = TouchableOpacityProps & {
  title: String
}

export default function Button({ title, ...rest }: props) {
  return (
    <TouchableOpacity style={styles.Button} {...rest}>
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}