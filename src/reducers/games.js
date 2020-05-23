const initialState = {
	loaded: false,
	items: null,
};

export default (state = initialState,action) => {
	switch (action.type) {
		case 'SET_GAMES' :
			return {
				...state,
				items: action.payload,
				loaded: true,
			};
		case 'SET_LOADED' :
			return {
				...state,
				loaded: action.payload,
			};
		default :
			return state;
	}
}