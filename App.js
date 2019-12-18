import React from 'react'
import { SafeAreaView } from 'react-native'

import { mainStyleSheet } from './styleSheets/main.styleSheet'

import MainScreen from './screens/main.screen'
import DatafetcherScreen from './screens/dataFetcher.screen'
import DatabaseScreen from './screens/database.screen'


export default class App extends React.Component {
  state = {
    activeScreen: 'main'
  }

  setActiveScreen = (value) => {
    this.setState({ activeScreen: value })
  }

  toMainScreen = () => this.setActiveScreen('main')

  render() {
    const { activeScreen } = this.state

    return (
      <SafeAreaView style={mainStyleSheet.container}>
        {activeScreen === 'main' && <MainScreen setActiveScreen={this.setActiveScreen} />}
        {activeScreen === 'datafetcher' && <DatafetcherScreen toMainScreen={this.toMainScreen} />}
        {activeScreen === 'database' && <DatabaseScreen toMainScreen={this.toMainScreen} />}
      </SafeAreaView>
    );
  }
}
