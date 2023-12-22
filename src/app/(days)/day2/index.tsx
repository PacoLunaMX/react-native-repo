import React from 'react'
import { View, Text, Button } from 'react-native'
import { Stack } from 'expo-router'
import { Link } from 'expo-router'

function DayDetailScreen() {
  return (
    <View>
        <Stack.Screen options={{ title: "Day 2: Onboarding"}}/>
        <Text>DayDetailScreen</Text>       

        <Link href="/day2/onboarding" asChild>
          <Button title="Go to Onboarding"/>
        </Link>
    </View>
  )
}

export default DayDetailScreen