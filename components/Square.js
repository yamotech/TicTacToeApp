import React, { Component } from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <View style={styles.square}>
        <Button title={`${this.state.value}`} style={styles.button} onPress={() => this.setState({ value: 'X'})}/>
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
