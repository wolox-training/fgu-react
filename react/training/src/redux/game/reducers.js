import { actionTypes } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

const calculateWinner = squares => {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const gameReducer = (state = initialState, action) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  switch (action.type) {
    case actionTypes.SQUARE_FILLED:
      if (calculateWinner(squares) || squares[action.position]) {
        state.winner = state.xIsNext ? 'O' : 'X';
        return state;
      }
      squares[action.position] = state.xIsNext ? 'X' : 'O';
      state = {
        history: history.concat([{ squares }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };
      return state;
    case actionTypes.JUMP_TO:
      state.stepNumber = action.position;
      state.xIsNext = action.position % 2 === 0;
      return state;
    default:
      return state;
  }
};
