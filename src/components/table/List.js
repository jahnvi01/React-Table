import React from "react";
import { ListItem } from "./ListItem";
import sortIcon from "../../assets/sort.png";

/**
 * It's a function that takes in a list and a loading state and returns a table with the list items
 */
const List = ({ list, loading }) => {
  return (
    <>
      <div className="table-container">
        <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>
                  <span className="title-sort">
                    <p>Discord / Wallet / Email ID</p>
                    <img
                      src={sortIcon}
                      className="sort-icon"
                      width="15"
                      height="15"
                      alt="src"
                    />
                  </span>
                </th>
                <th>
                  <span className="title-sort">
                    <p>NFT</p>
                    <img
                      src={sortIcon}
                      className="sort-icon"
                      width="15"
                      height="15"
                      alt="src"
                    />
                  </span>
                </th>
                <th>NFT Discription</th>
                <th>
                  <div className="accessories-header">
                    <span>Accessories</span>
                    <p className="trait-title">Silver</p>
                    <p className="trait-subtext">20% Have this trait</p>
                  </div>
                </th>
                <th>Status</th>
                <th>Date Claimed</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="loading-text">
                    <em>Loading...</em>
                  </td>
                </tr>
              ) : (
                list.map((item, index) => (
                  <ListItem key={index} index={index + 1} item={item} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
