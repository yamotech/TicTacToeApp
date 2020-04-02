import React, { Component } from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';

export default class Square extends Component {
  render() {
    return (
      <View style={styles.square}>
        <Button title={`${this.props.value}`} style={styles.button} onPress={() => alert('click')}/>
      </View>
    );
  }
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
