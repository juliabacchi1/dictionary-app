import "./Results.css";
import React from "react";
import Meaning from "./Meaning";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section className="Word">
          <h2>{props.results.word}</h2>
          <div className="Phonetic">{props.results.phonetic}</div>
        </section>
        {!!props.results.meanings &&
          props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        {props.results.status && <>{props.results.message}</>}
        <Photos photos={props.photos} />
      </div>
    );
  } else {
    return null;
  }
}
