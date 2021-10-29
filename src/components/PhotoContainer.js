import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";
import { withRouter } from "react-router-dom";

class PhotoContainer extends React.Component {
  render() {
    let photoList;
    if (this.props.photos.length > 0) {
      photoList = this.props.photos.map(
        (photo) => (photoList = <Photo key={photo.id} url={photo.url_c} />)
      );
    } else {
      photoList = <NotFound />;
    }

    return (
      <div className="photo-container">
        <h2>Results: {this.props.title}</h2>
        <ul>{photoList}</ul>
      </div>
    );
  }
}

export default withRouter(PhotoContainer);
