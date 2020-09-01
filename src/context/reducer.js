export const initialState = {
  queryString: null,
};

export const actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
};

const reducer = (state, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        queryString: payload,
      };
    default:
      return state;
  }
};

export default reducer;
