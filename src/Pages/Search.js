import React from "react"
import { useGlobalContext } from "../context"
import "../index.css"
    
const Search = () => {
    const { query, setQuery, error } = useGlobalContext();
    return (
      <form className="search-form" onSubmit={(event) => event.preventDefault()}>
        <h2>Welcome to MovieDB</h2>
        <input
          type="text"
          className="form-input"
          placeholder="Search For Movies Here"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {error.show && <div className="error">{error.msg}</div>}
      </form>
    )
  }

  export default Search