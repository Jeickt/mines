import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default props => {
  return (
    <Modal onRequestClose={props.onCancel} visible={props.isVisible}
      animationType='slide' transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <TouchableOpacity style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.15)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelected(0.30)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.45)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49B65D',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
})