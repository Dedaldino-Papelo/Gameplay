import { View, Text } from 'react-native'
import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {styles} from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';

type props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>
    checked?: boolean
}

export default function Category({title, checked,icon: Icon, ...rest}: props) {

    const { secondary50, secondary70 } = theme.colors

  return (
    <RectButton {...rest}>
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
        >
            <View style={[styles.content, {opacity: checked ? 1 : 0.4 }]}>
                <View style={checked ? styles.checked : styles.check}>
                    <Icon 
                    width={48}
                    height={48}
                    />
                </View>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </LinearGradient>
    </RectButton>
  )
}