import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo) => (
            <div className="col-4" key={photo.id}>
              <a href={photo.src.original} target="_blank">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
