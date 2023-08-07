import React from "react";
import PropTypes from "prop-types";
import "./VolumeControls.css";

const VolumeControls = ({ volume, updateVolume }) => {
  const handleVolumeChange = (e) => {
    const newVolume = Math.ceil(e.target.value / 10) * 10;
    updateVolume(newVolume);
  };

  return (
    <div className="volume-container">
      <i className="fa fa-volume-up" aria-hidden="true" />
      <input
        className="volume"
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

VolumeControls.propTypes = {
  volume: PropTypes.number,
  updateVolume: PropTypes.func,
};

export default VolumeControls;
