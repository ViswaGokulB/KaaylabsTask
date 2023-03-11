import axios from 'axios';

export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const SET_PAGE = 'SET_PAGE';
export const SET_FILTER = 'SET_FILTER';

export const fetchBeersSuccess = (beers) => ({
  type: FETCH_BEERS_SUCCESS,
  beers,
});

export const fetchBeers = (page, filter) => (dispatch) => {
  const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10${
    filter ? `&abv_gt=${filter}` : ''
  }`;
  axios.get(url).then((response) => {
    dispatch(fetchBeersSuccess(response.data));
  });
};

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  pageNumber,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
