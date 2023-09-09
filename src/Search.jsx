import React from 'react';
import { useGlobalContext } from "./context";
// import './App.css';
import './style.css';

const Search = () => {
  const { query,setQuery,isError } = useGlobalContext();
  return (
    <section className="search-section">
      <h1>Search Your Favourite Movie</h1>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
        <i className="ri-search-2-line"></i>
          <input 
          type="text" 
          placeholder="movie_name" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search;
