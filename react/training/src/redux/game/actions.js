export const actionTypes = {
  JUMP_TO: 'JUMP_TO_MOVE',
  SQUARE_FILLED: 'SQUARE_FILLED'
};

export const gameActions = {
  jumpTo: step => ({ type: actionTypes.JUMP_TO, position: step }),
  handleClick: squareNum => ({ type: actionTypes.SQUARE_FILLED, position: squareNum })
};

export default gameActions;
