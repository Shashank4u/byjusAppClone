import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Colors } from '../constants/Colors'

const ScreenA = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>ScrollingScreen</Text>
      <Button disabled={false} color='green' title='Navigate to ScrollingScreen' onPress={() => navigation.push('scrolling')} />
      <Text>ScreenB</Text> 
      <Button title='Navigate to ScrrenB' onPress={() => navigation.push('secod')}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  }
})

export default ScreenA