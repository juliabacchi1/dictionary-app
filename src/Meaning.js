import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition">{props.meaning.definition}</div>
      <div className="Example">{props.meaning.example}</div>
      <div className="Synonym">
        {props.meaning.synonyms &&
          props.meaning.synonyms.map(function (synonym, index) {
            return <span className="Each-synonym" key={index}>{synonym}</span>;
          })}
      </div>
    </div>
  );
}
