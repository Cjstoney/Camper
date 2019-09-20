import React from "react";
import "../Resources/resources.css";
import {searchTerm} from '../../helpers/search';

function Searchbar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          name="search"
          list="search"
          type="text"
          className="form-control"
          placeholder=""
          id="search"
        />

        <button type="submit" onClick={searchTerm} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;