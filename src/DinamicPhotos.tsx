import React from "react";
import { photos } from "./photos";
import Photo from "./Photo";
import "./App.css";

export default function DinamicPhotos() {
  return (
    <div className="Apps">
      <div className="photos">
        {photos.map((url, i) => (
          <Photo name={`Photo #${i}`} imageUrl={url} />
        ))}
      </div>
    </div>
  );
}
