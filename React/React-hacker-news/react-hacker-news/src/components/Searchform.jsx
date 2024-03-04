import Mocknews from "./Mocknews";
import axios from "axios";
import { useState, useEffect } from "react";
const baseURL = "http://hn.algolia.com/api/v1/search?query=";
export default function Searchform({ setNewsItem }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentSearch = e.currentTarget.elements.searchInput.value;
    console.log(currentSearch);
    searchNews(currentSearch);
  };
  const searchNews = (currentSearch) => {
    setLoading(true);
    axios
      .get(`${baseURL}${currentSearch}`)
      .then((response) => {
        console.log(response.data);
        setNewsItem(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search For?"
        className="search-input"
        id="searchInput"
      />
      <button type="Submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
