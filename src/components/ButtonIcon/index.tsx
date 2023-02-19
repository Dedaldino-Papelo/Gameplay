import { View, 
        Text,  
        TouchableOpacity, 
        Image, 
        TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './styles'
import discordImg from '../../assets/discord.png'

type props = TouchableOpacityProps & {
  title: String
}

export default function ButtonIcon({ title, ...rest }: props) {
  return (
    <TouchableOpacity style={styles.Button} {...rest}>
        <View style={styles.iconWrapper}>
           <Image source={discordImg} style={styles.icon} />
        </View>
        
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}