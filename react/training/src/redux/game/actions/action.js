export const handleClick = i => ({
  type: 'SQUARE_FILLED',
  position: i
});

export const jumpTo = step => ({
  type: 'JUMP_TO_MOVE',
  position: step
});
