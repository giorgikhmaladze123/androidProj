import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const mainStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    marginHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  topButton: {
    marginBottom: 30
  }
})
