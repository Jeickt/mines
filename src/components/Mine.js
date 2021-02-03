import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.coreMine} />
      <View style={styles.line} />
      <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
      <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
      <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coreMine: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 16,
    borderRadius: 3,
    backgroundColor: 'black'
  },
})