import { FULL_FETCH_BEERS_SUCCESS, FETCH_BEERS_SUCCESS, SET_PAGE, SET_FILTER } from './actions';

const initialState = {
  fullbeers: [],
  beers: [],
  page: 1,
  filter: '',
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.beers,
      };
    case FULL_FETCH_BEERS_SUCCESS:
      return {
        ...state,
        fullbeers: action.fullbeers,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.pageNumber,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default beerReducer;
