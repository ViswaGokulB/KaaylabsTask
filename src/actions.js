import axios from 'axios';

export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FULL_FETCH_BEERS_SUCCESS = 'FULL_FETCH_BEERS_SUCCESS';
export const SET_PAGE = 'SET_PAGE';
export const SET_FILTER = 'SET_FILTER';

export const fetchBeersSuccess = (beers) => ({
  type: FETCH_BEERS_SUCCESS,
  beers,
});

export const fullfetchBeersSuccess = (fullbeers) => ({
  type: FULL_FETCH_BEERS_SUCCESS,
  fullbeers,
});

export const fetchBeers = (page, filter) => (dispatch, getState) => {
  const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10${
    filter ? `&abv_gt=${filter}` : ''
  }`;
  axios.get(url).then((response) => {
    getState().fullbeers.push({ page: page, data: [...response.data] });
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
