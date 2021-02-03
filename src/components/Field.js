import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
  const { mined, opened, nearMines, exploded, flagged } = props

  const stylesField = [styles.field]
  if (opened) stylesField.push(styles.opened)
  if (exploded) stylesField.push(styles.exploded)
  if (flagged) stylesField.push(styles.flagged)
  if (!opened && !exploded) stylesField.push(styles.regular)

  let color = null
  if (nearMines > 0) {
    if (nearMines == 1) color = '#4169E1'
    if (nearMines == 2) color = '#22FF22'
    if (nearMines == 3) color = '#FF0000'
    if (nearMines == 4) color = '#120A8F'
    if (nearMines == 5) color = '#FF7514'
    if (nearMines == 6) color = '#00FFFF'
    if (nearMines == 7) color = '#964B00'
    if (nearMines == 8) color = '#090909'
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}>
      <View style={stylesField}>
        {!mined && opened && nearMines > 0
          ? <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
          : false}
        {mined && opened ? <Mine /> : false}
        {!opened && flagged ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    borderColor: '#777',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
})