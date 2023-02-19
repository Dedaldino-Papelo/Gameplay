import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Profile from '../../components/Profile/Index'

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}