import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'

export default function GuildIcon() {
    const uri = 'https://http2.mlstatic.com/D_NQ_NP_955738-MLB47331172234_092021-O.jpg'
  return (
    <Image
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
    />
  )
}