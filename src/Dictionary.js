import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4b59c6fof3bta7634229de85af0382e7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
