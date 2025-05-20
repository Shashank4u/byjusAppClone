import { View, Text } from 'react-native'
import React from 'react'

const Section = ({ route }) => {
    const {subject}=route.params;
  return (
    <View>
      <Text>{subject}</Text>
    </View>
  )
}

export default Section