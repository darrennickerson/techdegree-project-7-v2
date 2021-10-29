import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";

function PhotoContainer({ photos, title }) {
  let photoList;
  // If we have photos, map over them and send them to the Photo component to be displayed
  if (photos.length > 0) {
    photoList = photos.map(
      (photo) => (photoList = <Photo key={photo.id} url={photo.url_c} />)
    );
  } else {
    photoList = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>Results: {title}</h2>
      <ul>{photoList}</ul>
    </div>
  );
}

export default PhotoContainer;
