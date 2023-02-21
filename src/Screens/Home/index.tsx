import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Profile from '../../components/Profile/Index'
import Background from '../../components/Background/Index'
import ButtonAdd from '../../components/ButtonAdd/Index'
import CategorySelect from '../../components/CategorySelect/Index'

export default function Home() {
  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <CategorySelect />
      </View>
    </Background>
  )
}