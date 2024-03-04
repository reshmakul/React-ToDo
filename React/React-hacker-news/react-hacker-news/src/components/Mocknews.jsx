// import Data from "../data.json";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchform from "./Searchform";

export default function Mocknews() {
  const [newsItem, setNewsItem] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [id, setId] = useState(0);
  // const showNewsItem = setNewsItem();
  const getPosts = () => {
    axios
      .get("https://hn.algolia.com/api/v1/search")
      .then((response) => {
        setNewsItem(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLoading(true);
    getPosts();
    setLoading(false);
  }, []);
  return (
    <>
      <div>
        <h1>Loading Mock News...</h1>

        <Searchform setNewsItem={setNewsItem} />

        {newsItem.map((newsItem) => {
          return (
            <section className="container" key={newsItem.objectID}>
              <ul type="disc">
                <li className="news-title">{newsItem.title}</li>
                <li className="news-url">{newsItem.url}</li>
                <li className="author">{newsItem.author}</li>
              </ul>
              <br />
            </section>
          );
        })}
      </div>
    </>
  );
}
