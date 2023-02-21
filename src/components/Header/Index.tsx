import { View, Text } from 'react-native'
import React, {ReactNode} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/theme'
import { BorderlessButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { Feather } from '@expo/vector-icons'

type props = {
    title: string
    action?: ReactNode,
    navigation: any
}

export default function Header({ title, action, navigation }: props) {
    const { secondary100, secondary40, heading } = theme.colors

    const handlegoBack = () => {
        navigation.goBack()
    }

  return (
    <LinearGradient
        colors={[secondary100, secondary40 ]}
        style={styles.container}
    >
        <BorderlessButton onPress={handlegoBack}>
            <Feather 
                name='arrow-left'
                size={24}
                color={heading}
            />
        </BorderlessButton>
            <Text style={styles.title}>
                {title}
            </Text>

            {
                action &&
                <View>
                    {action}
                </View>
            }

    </LinearGradient>
  )
}