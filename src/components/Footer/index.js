import React, { useState } from "react";
import PropTypes from "prop-types";
import SongControls from "../SongControls";
import VolumeControls from "../VolumeControls";

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl }) => {
  const [volume, setVolume] = useState(100);

  const updateVolume = (newVolume) => {
    setVolume(newVolume);
  };

  return (
    <div className="footer">
      <SongControls
        stopSong={stopSong}
        pauseSong={pauseSong}
        resumeSong={resumeSong}
        audioControl={audioControl}
      />
      <VolumeControls volume={volume} updateVolume={updateVolume} />
    </div>
  );
};

Footer.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func,
};

export default Footer;
