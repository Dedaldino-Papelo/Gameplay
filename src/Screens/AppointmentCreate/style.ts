import {  StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: theme.colors.secondary50,
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        backgroundColor: theme.colors.secondary50,
        width: 64,
        height: 68,
        borderWidth: 1,
        borderRadius: 8
    },
    fields: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
    CaracteresLimit: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13
    },
    footer: {
        paddingVertical: 20,
        marginBottom: 24
        
    }
})