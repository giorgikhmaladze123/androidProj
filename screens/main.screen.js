import React from 'react'
import {
  View,
  Button
} from 'react-native'

import { mainStyleSheet } from '../styleSheets/main.styleSheet'

const MainScreen = ({ setActiveScreen }) => {
  return (
    <View style={mainStyleSheet.wrapper}>
      <View style={mainStyleSheet.topButton}>
        <Button
          title="Fetch data"
          color="#f194ff"
          onPress={() => setActiveScreen('datafetcher')}
        />
      </View>

      <View style={mainStyleSheet.topButton}>
        <Button
          title="Database"
          color="#f194ff"
          onPress={() => setActiveScreen('database')}
        />
      </View>

      <Button
        title="Add todo"
        color="#f194ff"
        onPress={() => setActiveScreen('add')}
      />
    </View>
  )
}

export default MainScreen
