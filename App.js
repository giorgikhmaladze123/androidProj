import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    searchValue: ''
  }

  onSearchChange = (searchValue) => this.setState({ searchValue })

  render() {
    const { searchValue } = this.state;

    return (
      <SafeAreaView>
        <View style={styles.wapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={this.onSearchChange}
            placeholder="enter index"
            value={searchValue}
          />

          <Button
            title="მონაცემების წამოღება"
            onPress={() => {}}
          />
          <Button
            title="მონაცემების შენახვა"
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wapper: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginTop: '20px'
  },
  searchInput: {
    backgroundColor: '#e8eaf6',
    borderBottomColor: '#001970',
    borderBottomWidth: '2px',
    padding: '20px',
    height: '60px',
    width: '90%',
    lineHeight: 60,
    fontSize: '48px',
    marginTop: '20px',
  }
});
