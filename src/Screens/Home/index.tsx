import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Profile from '../../components/Profile/Index'
import Background from '../../components/Background/Index'

export default function Home() {
  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
        </View>
      </View>
    </Background>
  )
}