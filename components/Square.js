import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Square extends Component {
  render() {
    return (
      <View style={styles.square}>
        <Text>aaa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 34,
    height: 34,
  }
})
