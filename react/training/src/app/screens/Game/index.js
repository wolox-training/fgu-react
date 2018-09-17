import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleClick, jumpTo } from '../../../redux/game/actions/action';

import Board from './components/Board/index';
import styles from './styles.scss';

class Game extends Component {
  getState = winner => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    return `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  movements = history =>
    history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={step}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = this.movements(history);
    const status = this.getState(winner);
    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.props.handleClick(i)} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(handleClick(i)),
  jumpTo: step => dispatch(jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
