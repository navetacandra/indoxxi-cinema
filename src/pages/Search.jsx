import React from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../modules/SearchResult';

function Search() {

  let { keyword } = useParams();

  return (
    <>
      {
        keyword ? (
          <SearchResult />
        ) : null
      }
    </>
  )
}

export default Search