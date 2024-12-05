import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

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
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <div className="Dictionary">
          <section>
            <form onSubmit={search}>
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
            </form>
          </section>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
