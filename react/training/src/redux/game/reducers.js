import { actionTypes } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  winner: ''
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
