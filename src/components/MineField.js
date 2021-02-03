import React from 'react'
import { StyleSheet, View } from 'react-native'

import Field from './Field'

export default props => {
  const rows = props.board.map((row, i) => {
    const columns = row.map((field, j) => {
      return <Field {...field} key={j}
        onOpen={() => props.onOpenField(i, j)}
        onSelect={() => props.onSelectField(i, j)} />
    })
    return <View key={i} style={{ flexDirection: 'row' }}>{columns}</View>
  })
  return <View style={{ backgroundColor: '#EEE' }}>{rows}</View>
}
