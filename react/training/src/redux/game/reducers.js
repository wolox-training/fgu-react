import { actionTypes } from './actions';
import { calculateWinner } from './utils';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  winner: ''
};

export default function reducer(state = initialState, action) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const winner = calculateWinner(squares);
  switch (action.type) {
    case actionTypes.SQUARE_FILLED:
      if (winner || squares[action.position]) return { ...state, winner };
      squares[action.position] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        history: history.concat([{ squares }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(squares)
      };
    case actionTypes.JUMP_TO:
      return {
        ...state,
        stepNumber: action.position,
        xIsNext: action.position % 2 === 0
      };
    default:
      return state;
  }
}
