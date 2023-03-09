import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Calc from './components/Calc'

export default function App() {
  return (
    <View style={styles.container}>
      <Calc/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})