import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.photos);
  }

  function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4b59c6fof3bta7634229de85af0382e7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation: https://www.pexels.com/api/
    const client = createClient(
      "tec9lNUHhPUDnMmr4KW6COAHbS3EUIiyDgpHGKK7BHgMY8fL3QmmmRsQ"
    );
    const query = keyword;
    
    client.photos
      .search({ query, per_page: 3 })
      .then(handlePexelsResponse)
      .catch((error) => {
        console.error("Erro na API Pexels:", error.message);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="Dictionary">
        <section>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search for a word"
              />
              <button
                className="input-group-text btn"
                type="submit"
                id="button-addon1"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </section>
      </div>
      <Results results={results} photos={photos}  />
    </div>
  );
}
