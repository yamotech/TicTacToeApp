import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Board from './Board';
import calculateWinner from './calculateWinner'

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move:
        'Go to game start';

      return (
        <View key={move}>
          <Button title={desc} onPress={() => this.jumpTo(move)} />
        </View>
      )
    })

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
          <View>{moves}</View>
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
