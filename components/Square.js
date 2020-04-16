import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function Square(props) {
  return (
    <View style={styles.square}>
      <Button title={`${props.value}`} style={styles.button} onPress={() => props.onPress()} />
    </View>
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
