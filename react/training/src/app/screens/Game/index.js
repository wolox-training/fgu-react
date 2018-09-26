import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { gameActions } from '../../../redux/game/actions';

import Board from './components/Board/index';
import styles from './styles.scss';

class Game extends Component {
  getState = winner => (winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`);

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
    const moves = this.movements(history);
    const status = this.getState(this.props.winner);
    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board squares={current.squares} onClick={this.props.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  xIsNext: PropTypes.bool,
  jumpTo: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  stepNumber: PropTypes.number,
  winner: PropTypes.string
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(gameActions.handleClick(i)),
  jumpTo: step => dispatch(gameActions.jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
