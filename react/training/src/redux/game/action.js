export const squareFilled = i => ({
  type: 'SQUARE_FILLED',
  position: i
});

export function handleClick(i) {
  return dispatch => {
    dispatch(squareFilled(i));
  };
}
