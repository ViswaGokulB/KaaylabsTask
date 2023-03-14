import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers, fetchBeersSuccess, setPage, setFilter } from './actions';
import { Table, Pagination, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beers);
  const fullbeers = useSelector(state => state.fullbeers);
  const pageNumber = useSelector(state => state.page);
  const filter = useSelector(state => state.filter);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const setBeers = fullbeers.filter(ele=>ele.page === pageNumber);
    if((setBeers.length > 0) && (setBeers[0].page == pageNumber)){
      dispatch(fetchBeersSuccess(setBeers[0].data));
    }
    else{
      dispatch(fetchBeers(pageNumber));
    }
  }, [pageNumber, dispatch]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(setFilter(event.target.value));
  }

  const filteredBeers = beers.filter(beer => beer.name.toLowerCase().startsWith(filter.toLowerCase()) );

  return (
    <div style={{margin:"20px"}}>
      <Form style={{margin:"20px 0px"}}>
        <Form.Group controlId="searchTerm">
          <Form.Control type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchTermChange} />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>First Brewed</th>
            <th>Tagline</th>
            <th>ABV</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredBeers.map(beer => (
            <tr key={beer.id}>
              <td>{beer.id}</td>
              <td>{beer.name}</td>
              <td>{beer.first_brewed}</td>
              <td>{beer.tagline}</td>
              <td>{beer.abv}</td>
              <td>{beer.description}</td>
              <td><a href={beer.image_url} >image</a></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="d-flex justify-content-center">
        <Pagination.Prev 
        disabled={pageNumber === 1} 
        onClick={() => dispatch(setPage(pageNumber - 1))} />
        <p style={{padding:"7px 11px"}}>{pageNumber}</p>
        <Pagination.Next disabled={pageNumber >= 33} onClick={() => dispatch(setPage(pageNumber + 1))} />
      </Pagination>
      
    </div>
  );
}

export default App;
