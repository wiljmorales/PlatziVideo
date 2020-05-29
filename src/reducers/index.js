const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    case 'SEARCH_VIDEO':
      if (action.payload.trim() === '') {
        return {
          ...state,
          search: [],
        };
      }
      // eslint-disable-next-line no-case-declarations
      const listas = [...state.trends, ...state.originals];
      return {
        ...state,
        search: listas.filter((item) => item.title.toLowerCase().includes(action.payload)),
      };
    default:
      return state;
  };
};

export default reducer;
