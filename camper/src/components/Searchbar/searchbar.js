import React from "react";
import "../Resources/resources.css";

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
          placeholder="Search here"
          id="search"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;