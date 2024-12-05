import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://portfolio-juliabacchi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Júlia Bacchi
          </a>
          . Is open-sourced on{" "}
          <a
            href="https://github.com/juliabacchi1/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-app-search.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
