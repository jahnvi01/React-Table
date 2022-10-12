import React from "react";

/**
 * It takes in the listPerPage, totalList, and paginate props and returns a list of page numbers that
 * are clickable.
 * @returns The pagination component is being returned.
 */

const Pagination = ({ listPerPage, totalList, setListPerPage }) => {
  const handleChange = (value) => {
    setListPerPage(value);
  };

  return (
    <nav>
      <ul className="pagination">
        <div className="page-count">
          <p>1-1 of {totalList}</p>
          <div className="pagination-action">
            <span className="pagination-icon">{"<"}</span>
            <span className="pagination-icon">{">"}</span>
          </div>
        </div>
        <div className="pagination-count-select">
          <select
            defaultValue={listPerPage}
            onChange={(e) => handleChange(e.target.value)}
            className="pagination-select"
          >
            <option value="5">5/ page</option>
            <option value="10">10/ page</option>
          </select>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
