import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Square extends Component {
  render() {
    return (
      <View style={styles.square}>
        <Text style={styles.text}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderColor: '#333',
    borderWidth: 1,
  },
  text: {
    fontSize: 80,
    textAlign: 'center'
  }
})
