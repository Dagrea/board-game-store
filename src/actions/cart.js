export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const incrementInCart = id => ({
  type: 'INCREMENT_IN_CART',
  payload: id,
});

export const decrementInCart = id => ({
  type: 'DECREMENT_IN_CART',
  payload: id,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});