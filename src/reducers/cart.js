const initialState = {
  items: []
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
    const actual = {...action.payload,amount: 1};
      return {
        ...state,
        items: [...state.items, actual]
      };
    case "INCREMENT_IN_CART":
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === action.payload) {var current = i;break;}
    }
    state.items[current].amount++;
      return {
        ...state,
        items: state.items
      };
      case "DECREMENT_IN_CART":
        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].id === action.payload) {var dcurrent = i;break;}
        }
        state.items[dcurrent].amount--;
        if (state.items[dcurrent].amount <= 0) {state.items[dcurrent].amount = 1}
      return {
        ...state,
        items: state.items
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(j => j.id !== action.payload)
      };
    default:
      return state;
  }
};