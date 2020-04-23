import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Board from './Board';
import calculateWinner from './calculateWinner'

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <View style={styles.game}>
        <View style={styles.gameBoard}>
          <Board
            squares={current.squares}
            onPress={(i) => this.handleClick(i)}
          />
        </View>
        <View style={styles.gameInfo}>
          <Text>{status}</Text>
          <View></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    marginBottom: 10,
  },
  gameBoard: {},
  gameInfo: {}
});
