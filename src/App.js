import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './functions'
import params from './params'
import Header from './components/Header'
import LevelSelection from './screens/LevelSelection'
import MineField from './components/MineField'


export default () => {
  const [minedBoard, setMinedBoard] = useState(createState())
  const [showLevelSelecction, setShowLevelSelection] = useState(false)

  function minesAmount() {
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    return Math.ceil(rows * columns * params.difficultLevel)
  }

  function createState() {
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    return createMinedBoard(rows, columns, minesAmount())
  }

  const onOpenField = (row, column) => {
    const board = cloneBoard(minedBoard)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Derrota!')
    }
    if (won) {
      Alert.alert('Vitória!')
    }

    setMinedBoard(board)
  }

  const onSelectField = (row, column) => {
    const board = cloneBoard(minedBoard)
    invertFlag(board, row, column)
    setMinedBoard(board)
  }

  const onLevelSelected = level => {
    params.difficultLevel = level
    setMinedBoard(createState())
    setShowLevelSelection(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <LevelSelection isVisible={showLevelSelecction}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)} />
      <Header flagsLeft={minesAmount() - flagsUsed(minedBoard)}
        onNewGame={() => setMinedBoard(createState())}
        onFlagPress={() => setShowLevelSelection(true)} />
      < View style={styles.board}>
        <MineField board={minedBoard}
          onOpenField={onOpenField}
          onSelectField={onSelectField} />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
})