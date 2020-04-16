import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Board from './Board';

export default class Game extends Component {
  render() {
    return (
      <View style={styles.game}>
        <View style={styles.gameBoard}>
          <Board />
        </View>
        <View style={styles.gameInfo}>
          <View></View>
          <View></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
  gameBoard: {},
  gameInfo: {}
});
