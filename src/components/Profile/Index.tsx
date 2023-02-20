import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Avatar from '../Avatar/Index'

export default function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage='https://github.com/Dedaldino-Papelo.png'/>

      <View>
        <View style={styles.user}>
            <Text style={styles.greetings}>Olá</Text>
            <Text style={styles.username}>Rodrigo</Text>
        </View>

        <Text 
            style={styles.message}>
            Hoje é dia de Vitória
        </Text>
        
      </View>
    </View>
  )
}