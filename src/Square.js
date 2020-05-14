import React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function Square(props) {
  return (
    <TouchableOpacity style={styles.square} onPress={() => props.onPress()} >
      <Button title={`${props.value}`} style={styles.button} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 100,
    fontSize: 80,
    textAlign: 'center'
  }
})
