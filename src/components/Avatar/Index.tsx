import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/theme'
import { styles } from './styles'

type props = {
    urlImage: string
}

export default function Avatar({ urlImage }: props) {
    const { secondary50, secondary70 } = theme.colors
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
  >
    <Image
      source={{uri: urlImage}} 
      style={styles.avatar}
    />
  </LinearGradient>
  )
}