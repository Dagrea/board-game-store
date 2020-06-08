const initialState = {
  account: {login: '', password: '',fullname: '', email: '',phone: '', city: '',address: ''},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        account: action.payload,
      };
    case "CHANGE_ACCOUNT_DATA":
      return {
        ...state,
        account: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        account: {login: '', password: '', fullname: '', email: '',phone: '', city: '',address: ''},
      };
    default:
      return state;
  }
};