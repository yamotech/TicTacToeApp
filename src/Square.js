import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Square(props) {
  return (
    <TouchableOpacity style={styles.square} onPress={() => props.onPress()} >
      <Text style={styles.button}>{props.value}</Text>
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
    lineHeight: 100,
    textAlign: 'center'
  }
})
