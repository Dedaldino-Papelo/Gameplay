import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import discordImg from '../../assets/discord.png'

interface props {
  title: String
}

export default function ButtonIcon({ title }: props) {
  return (
    <TouchableOpacity style={styles.Button}>
        <View style={styles.iconWrapper}>
           <Image source={discordImg} style={styles.icon} />
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}