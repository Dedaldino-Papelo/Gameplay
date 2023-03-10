import { View, Text } from 'react-native'
import React, {ReactNode} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { theme } from '../../global/theme'

type props = {
    children: ReactNode
}
export default function Background({ children }: props) {
    const {secondary80, secondary100} = theme.colors
  return (
      <LinearGradient
        style={styles.container}
        colors={[secondary80, secondary100]}
      >
        {children}
      </LinearGradient>
  )
}