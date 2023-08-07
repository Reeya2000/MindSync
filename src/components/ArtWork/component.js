import React from "react";
import PropTypes from "prop-types";

const ArtWork = (albumArtwork) => (
  <div className="artwork-container">
    <img alt="artwork" className="artwork" src={albumArtwork.albumImage} />
  </div>
);

ArtWork.propTypes = {
  albumArtwork: PropTypes.string,
};

export default ArtWork;
