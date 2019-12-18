import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, ScrollView, AsyncStorage } from 'react-native'

import { datafetcherStyleSheet } from '../styleSheets/dataFetcher.styleSheet'

const DatabaseScreen = ({ toMainScreen }) => {
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    AsyncStorage.getItem('data')
      .then(res => setData(JSON.parse(res)))
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'left', borderBottomColor: '#6f79a8', borderBottomWidth: 1 }}>
        <Text style={{ color: '#5c6bc0', padding: 15 }} onPress={toMainScreen}>Go back</Text>
      </View>

      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'left', borderBottomColor: '#6f79a8', borderBottomWidth: 1 }}>
        <TextInput placeholder="enter id to filter" onChangeText={(value) => setFilter(value)} value={filter} />
      </View>

      {data && data.length && <ScrollView style={{ flex: 0.8 }}>
        <FlatList
          data={!filter ? data : data.filter(todo => todo.id == filter)}
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
      </ScrollView>}

      {(!data || !data.length) && (
        <View style={datafetcherStyleSheet.wrapper}>
          <Text>
            No records where found in database, fetch them first and press save button
          </Text>
        </View>
      )}
    </View>
  )
}

export default DatabaseScreen
