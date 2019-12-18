import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Button, FlatList, ActivityIndicator, Alert, AsyncStorage } from 'react-native'
import axios from 'axios'

import { datafetcherStyleSheet } from '../styleSheets/dataFetcher.styleSheet'

const DatafetcherScreen = ({ toMainScreen }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function saveToDB() {
    if(data)
      AsyncStorage.setItem('data', JSON.stringify(data))
        .then(() => Alert.alert('Data saved successfully'))
  }

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(false)

    axios.get('https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        setError(false)
        setData(res.data.slice(0, 50))
        setLoading(false)

        if(!res.data)
          setError(true)
      })
      .catch(e => {
        setError(true)
        setLoading(false)

        console.error('Fetching error: ', e);
      })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={datafetcherStyleSheet.wrapper}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{ marginBottom: 20 }}
          />

          <Text>
            Fetching data from server
          </Text>
        </View>
      )}

      {error && (
        <View style={datafetcherStyleSheet.wrapper}>
          <Text>
            Error fetching data, please restart app
          </Text>
        </View>
      )}

      {!error && !loading && data && (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'left', borderBottomColor: '#6f79a8', borderBottomWidth: 1 }}>
            <Text style={{ color: '#5c6bc0', padding: 15 }} onPress={toMainScreen}>Go back</Text>
          </View>

          <ScrollView style={{ flex: 0.8 }}>
            <FlatList
              data={data}
              renderItem={({ item: { id, title, completed } }) => {
                return (
                  <View style={datafetcherStyleSheet.listItem}>
                    <Text>ID: {id}</Text>
                    <Text>Title: {title}</Text>
                    <Text>Completed: {String(completed)}</Text>
                  </View>
                )
              }}
              keyExtractor={item => item.id}
            />
          </ScrollView>

          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', borderTopColor: '#6f79a8', borderTopWidth: 1 }}>
            <Button
              title="Save to database"
              color="#5c6bc0"
              onPress={saveToDB}
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default DatafetcherScreen
