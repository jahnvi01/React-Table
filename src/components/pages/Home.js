import React, { useState, useEffect } from "react";
import List from "../table/List";
import Pagination from "../table/Pagination";
import { fetchList, fetchListLength } from "../../actions/Api";

const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listPerPage, setListPerPage] = useState(10);

  /* Fetching the data from the API and setting the data of the pageList. */

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const results = await fetchList();
      if (results) {
        setPageList(results);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  /* Fetching the data from the API and setting the count of the pageList. */
  useEffect(() => {
    async function fetchListCount() {
      const results = await fetchListLength();
      if (results) {
        setTotalCount(results);
      }
    }
    fetchListCount();
  }, []);

  return (
    <div className="App">
      <div className="sub-container">
        <List list={pageList} loading={loading} />
        <Pagination
          listPerPage={listPerPage}
          totalList={totalCount}
          setListPerPage={setListPerPage}
        />
      </div>
    </div>
  );
};

export default Home;
