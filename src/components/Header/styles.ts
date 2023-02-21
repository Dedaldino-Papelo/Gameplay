import {  StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    }
})