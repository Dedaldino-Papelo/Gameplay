import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  title: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 18,
    fontFamily: theme.fonts.text400
  }
})
