import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Calc from './components/Calc'
import Produtos from './components/Produtos'
import Router from './components/Router'

export default function App() {
  return (
    <View style={styles.container}>
      <Router/>
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