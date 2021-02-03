import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={styles.container}>
      <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 6,
    width: 7,
    backgroundColor: '#F00',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 14,
  },
  flagpoleBigger: {
    height: 26,
    width: 3,
    marginLeft: 12,
  },
  flagBigger: {
    height: 9,
    width: 11,
    marginLeft: 2,
  },
  base1Bigger: {
    height: 3,
    width: 9,
    marginTop: 18,
    marginLeft: 9,
  },
  base2Bigger: {
    height: 3,
    width: 15,
    marginTop: 24,
    marginLeft: 6,
  },
})