import React from 'react'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'


function DayDetailScreen() {
  return (
    <View>
        <Stack.Screen options={{ title: "Day 1"}}/>
        <Text>DayDetailScreen</Text>       
    </View>
  )
}

export default DayDetailScreen